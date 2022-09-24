import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Raj Mayank Blog</title>
        <meta name="description" content="This is a blog." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
      </main>

      <footer className={styles.footer}>
        <p>&lt;/&gt; by Hritick</p>
      </footer>
    </div>
  );
}
