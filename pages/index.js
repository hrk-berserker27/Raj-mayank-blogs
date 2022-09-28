import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Blog from "../components/Blog";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="description" content="This is a blog." />
        <title>Raj Mayank Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <Footer />
        <Blog />
      </main>
    </div>
  );
}
