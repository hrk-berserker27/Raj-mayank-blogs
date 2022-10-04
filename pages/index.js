import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import BlogTable from "../components/BlogTable";
import { useInView } from "react-intersection-observer";
import Head from "next/head";

export default function Home() {
  const [ref, inview, entry] = useInView({
    threshold: 0,
  });
  return (
    <div>
      <Head>
        <meta name="description" content="This is a blog." />
        <title>Raj Mayank Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <BlogTable />
      </main>
    </div>
  );
}
