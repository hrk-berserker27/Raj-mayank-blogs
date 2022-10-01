import React from "react";
import styles from "../styles/Blog.module.css";

function BlogTable() {
  return (
    <div className={styles.container}>
      <section className={styles.slider}>
        <div className={styles.slides}>1</div>
        <div className={styles.slides}>2</div>
        <div className={styles.slides}>3</div>
        <div className={styles.slides}>4</div>
        <div className={styles.slidesCounter}></div>
      </section>
      <section className={styles.blogList}>
        <div className={styles.card}></div>
      </section>
    </div>
  );
}

export default BlogTable;
