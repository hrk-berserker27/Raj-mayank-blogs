import React, { useEffect } from "react";
import styles from "../styles/BlogTable.module.css";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { prepareServerlessUrl } from "next/dist/server/base-server";
function BlogTable() {
  const [counter, setCounter] = useState(0);
  const [ref, inview] = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      let interval;
      const slider = document.getElementById("slider");
      const labelList = document.getElementById("list");
      const array = labelList.children;
      const childNumber = slider.childElementCount;
      if (inview && counter < childNumber) {
        interval = setTimeout(() => {
          slider.setAttribute("style", `margin-left: calc(${-counter}*100%)`);
          array[counter].setAttribute(
            "style",
            `background-color: rgb(217, 214, 214)`
          );
          if (counter > 0) {
            array[counter - 1].removeAttribute("style");
          }
          setCounter((prevState) => prevState + 1);
        }, 5000);
      } else {
        if (counter === childNumber) {
          setCounter((prevState) => prevState - prevState);
          array[counter - 1].removeAttribute("style");
        }
      }
      return () => {
        clearTimeout(interval);
      };
    }
  }, [counter, inview]);

  return (
    <div className={styles.container}>
      <section className={styles.slider} ref={ref}>
        <div className={styles.sliderContainer} id="slider">
          <div className={styles.slides}>1</div>
          <div className={styles.slides}>2</div>
          <div className={styles.slides}>3</div>
          <div className={styles.slides}>4</div>
        </div>
        <div className={styles.slidesCounter} id="list">
          <label className={styles.dash} htmlFor="1"></label>
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
