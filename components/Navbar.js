import React from "react";
import styles from "../styles/Navbar.module.css";
import img from "../public/logo.png";
import Image from "next/image";
import Typewriter from "typewriter-effect";

function Navbar() {
  let handleClick;
  if (typeof window !== "undefined") {
    handleClick = () => {
      const list = document.getElementById("navLinks");
      list.style.clipPath = "circle(50% at -50% 50%)";
    };
  }
  return (
    <nav className={styles.navbar}>
      <ul className={styles.ul}>
        <li className={styles.brandName}>
          <Image
            src={img}
            className={styles.img}
            layout="intrinsic"
            alt="brandName"
            priority="true"
          />
          <div className={styles.profilePic}></div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.intro}>
            <header>
              <h1>
                <Typewriter
                  options={{
                    strings: ["Hi, I'm Raj Mayank", "Welcome To My Blog"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </header>
            <p>
              I am an aspiring economist with interest in various fields such as
              world-economics, macroeconomics and microeconomics. I have great
              expertise in International economics.
            </p>
          </div>
          <p className={styles.description}>
            Blogger&nbsp;<span>|</span>
            <span>|</span>
            &nbsp;Aspiring Economist
          </p>
        </li>
      </ul>
      <div className={styles.linkContainer}>
        <button>
          <a href="blog">Check out my blogs&nbsp;&rarr;</a>
        </button>
      </div>
      <div className={styles.navigationLinks}>
        <div className={styles.burger} onClick={handleClick}>
          <div className={styles.burgerLayer}></div>
          <div className={styles.burgerLayer}></div>
          <div className={styles.burgerLayer}></div>
        </div>
        <ul className={styles.containerList}>
          <li>Home</li>
          <li>Blogs</li>
          <li>Contact Me</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
