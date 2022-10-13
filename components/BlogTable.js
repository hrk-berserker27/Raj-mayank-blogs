import React, { useEffect, useState } from "react";
import styles from "../styles/BlogTable.module.css";
import { useInView } from "react-intersection-observer";

function BlogTable(props) {
  const [counter, setCounter] = useState(0);
  const [ref, inview] = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      let interval;
      const slider = document.getElementById("slider");
      const labelList = document.getElementById("list");
      const array = Array.from(labelList.children);
      const childNumber = slider.childElementCount;

      if (inview && counter < childNumber) {
        slider.setAttribute("style", `margin-left: calc(${-counter}*100%)`);
        array[counter].setAttribute(
          "style",
          "background-color: rgb(217, 214, 214)"
        );
        interval = setTimeout(() => {
          setCounter((prevState) => prevState + 1);
        }, 5000);
        if (counter > 0) {
          array[counter - 1].removeAttribute("style");
        }
        if (counter === 0 && array[childNumber - 1].hasAttribute("style")) {
          array[childNumber - 1].removeAttribute("style");
        }
      } else {
        if (counter === childNumber) {
          setCounter((prevState) => prevState - prevState);
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
        <header id="blogList" className={styles.heading}>
          My Blogs
        </header>
        <section className={styles.blogContainer}>
          {props.blogs.map((item) => (
            <div className={styles.card} key={item.id}>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}

export default BlogTable;
