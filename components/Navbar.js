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
  //function for creating cross icon
  const closeButtonActive = (id, position, top, left, zIndex) => {
    const burger = document.getElementById(id);
    burger.style.position = position;
    burger.style.left = left;
    burger.style.top = top;
    burger.style.zIndex = zIndex;
    createArrowAndRevert(burger, "0.3em", "none", "90deg", "-0.3em", "45deg");
  };
  //function for reverting back to burger icon
  const revert = (id, position) => {
    const burger = document.getElementById(id);
    burger.style.position = position;
    createArrowAndRevert(burger, "0em", "block", "0deg", "0em", "0deg");
  };
  //adding the function for click event
  const handleClick = () => {
    if (typeof window !== "undefined") {
      const list = document.getElementById("navLinks");
      if (active) {
        revert("burger", "static");
        list.style.transform = "translateX(-100%)";
        active = false;
        return;
      } else {
        list.style.transform = "translateX(0%)";
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
          <div className={styles.img}>
            <Image
              src={img}
              layout="intrinsic"
              alt="brandName"
              priority="true"
            />
          </div>
          <div className={styles.profilePic}></div>
        </li>
        <li className={styles.secondList}>
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
              I am an aspiring economist with interest in various fields such as{" "}
              <span>world-economics</span>, <span>macroeconomics</span> and{" "}
              <span>microeconomics</span>. I have great expertise in{" "}
              <span>International economics</span>.
            </p>
          </div>
          <p className={styles.description}>
            Blogger&nbsp;<span>|</span>
            <span>|</span>
            &nbsp;Aspiring Economist
          </p>
          <div className={styles.landingImage}></div>
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
