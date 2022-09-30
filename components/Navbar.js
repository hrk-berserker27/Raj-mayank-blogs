import React, { useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import img from "../public/logo.png";
import Image from "next/image";
import Typewriter from "typewriter-effect";

function Navbar() {
  let active = false;
  //function for creating cross icon and reverting back to burger
  const createArrowAndRevert = (
    element,
    firstChildTranslation,
    secondChildDisplay,
    thirdChildRotation,
    thirdChildTranslation,
    parentRotation
  ) => {
    //creating array of children
    const array = Array.from(element.children);
    array[0].style.transform = `translateY(${firstChildTranslation})`;
    array[1].style.display = `${secondChildDisplay}`;
    array[2].style.transform = `rotate(${thirdChildRotation}) translate(${thirdChildTranslation})`;
    element.style.transform = `rotate(${parentRotation})`;
  };
  const closeButtonActive = (id, position, top, left, zIndex) => {
    const burger = document.getElementById(id);
    burger.style.position = position;
    burger.style.left = left;
    burger.style.top = top;
    burger.style.zIndex = zIndex;
    createArrowAndRevert(burger, "0.3em", "none", "90deg", "-0.3em", "45deg");
  };
  const revert = (id, position) => {
    const burger = document.getElementById(id);
    burger.style.position = position;
    createArrowAndRevert(burger, "0em", "block", "0deg", "0em", "0deg");
  };
  const handleClick = () => {
    if (typeof window !== "undefined") {
      const list = document.getElementById("navLinks");
      if (active) {
        list.style.clipPath = "circle(0.0% at 0 50%)";
        revert("burger", "static");
        active = false;
        return;
      } else {
        list.style.clipPath = "circle(50% at -50% 50%)";
      }
      active = true;
      if (active) {
        closeButtonActive("burger", "absolute", "30%", "1em", "99");
      }
    }
  };
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
        <div className={styles.burger} onClick={handleClick} id="burger">
          <div className={styles.burgerLayer}></div>
          <div className={styles.burgerLayer}></div>
          <div className={styles.burgerLayer}></div>
        </div>
        <ul className={styles.containerList} id="navLinks">
          <li>Home</li>
          <li>Blogs</li>
          <li>Contact Me</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
