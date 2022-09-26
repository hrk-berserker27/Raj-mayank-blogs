import React from "react";
import styles from "../styles/Navbar.module.css";
import img from "../public/logo.png";
import Image from "next/image";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.ul}>
        <li className={styles.brandName}>
          <Image src={img} objectFit="fill" />
          <div className={styles.profilePic}></div>
        </li>
        <li className={styles.listItem}>
          <p className={styles.intro}>
            <h1>Hi, I'm Raj Mayank</h1>
            <p>
              I am an aspiring economist with interest in various fields such as
              world-economics, macroeconomics and microeconomics. I have great
              expertise in Business economics.
            </p>
          </p>
          <p className={styles.description}>
            Writer&nbsp;<span>|</span>&nbsp;Social-media influencer&nbsp;
            <span>|</span>
            &nbsp;Aspiring Economist
          </p>
        </li>
      </ul>
      <div className={styles.linkContainer}>
        <button>
          <a href="blogs">Check out my blogs&nbsp;&rarr;</a>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
