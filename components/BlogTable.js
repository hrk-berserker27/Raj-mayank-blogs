import React from "react";
import styles from "../styles/BlogTable.module.css";
import { useState } from "react";
function BlogTable() {
  function isInViewport(el) {
    if (typeof window !== "undefined") {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  }
  const [counter, setCounter] = useState(0);
  return (
    <div className={styles.container}>
      <section className={styles.slider}>
        <div className={styles.sliderContainer}>
          <div className={styles.slides}>1</div>
          <div className={styles.slides}>2</div>
          <div className={styles.slides}>3</div>
          <div className={styles.slides}>4</div>
        </div>
        <div className={styles.slidesCounter}>
          <label
            className={`${styles.dash} ${styles.active}`}
            htmlFor="1"
          ></label>
          <label className={styles.dash} htmlFor="2"></label>
          <label className={styles.dash} htmlFor="3"></label>
          <label className={styles.dash} htmlFor="4"></label>
        </div>
      </section>
      <section className={styles.blogList}>
        <div className={styles.card}></div>
      </section>
    </div>
  );
}

export default BlogTable;
