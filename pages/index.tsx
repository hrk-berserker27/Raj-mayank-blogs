import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import BlogTable from "../components/BlogTable";
import Footer from "../components/Footer";
import Head from "next/head";
import clientPromise from "../lib/mongodb";
import { InferGetServerSidePropsType } from "next";


export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("test");
    const posts = await db.collection("posts").find({}).toArray();
    const blogs:Array<Object> = [];
    posts.map((item)=>blogs.push({"title": item.title, "body": item.body, "id": item._id.toString()}))

    return {
      props: { blogs },
    };
  } catch (e) {
    console.error(e);
    return {
      props: {  }
    };
  }
}

export default function Home({
  blogs,
}: InferGetServerSidePropsType<typeof getServerSideProps>){
  return (
    <div>
      <Head>
        <meta name="description" content="This is a blog." />
        <title>Raj Mayank Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* {isConnected ? (
          <h2 className="subtitle">You are connected to MongoDB</h2>
        ) : (
          <h2 className="subtitle">
            You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
            for instructions.
          </h2>
        )} */}
        <Navbar />
        <BlogTable blogs = {blogs} />
        <Footer/>
      </main>
    </div>
  );
}
