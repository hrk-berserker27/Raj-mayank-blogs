import styles from "../styles/Navbar.module.css";
import img from "../public/logo.png";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";

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
  const closeButtonActive = (id, position, top, left, zIndex, background) => {
    const burger = document.getElementById(id);
    burger.style.position = position;
    burger.style.left = left;
    burger.style.top = top;
    burger.style.zIndex = zIndex;
    burger.style.backgroundColor = background;
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
      const windowWidth = window.innerWidth;
      let smallScreen = false;
      if (windowWidth <= 600) {
        smallScreen = true;
      }
      if (smallScreen) {
        list.style.height = "100vh";
        list.style.clipPath = "none";
        list.style.alignItems = "center";
      } else {
        list.style.clipPath =
          "polygon(0% 0%, 50% 0%, 100% 50%, 50% 100%, 0% 100%)";
        list.style.alignItems = "start";
      }
      if (active) {
        list.style.transform = "translateX(-100%)";
        revert("burger", "static");
        active = false;
        return;
      } else {
        list.style.transform = "translateX(0%)";
      }
      active = true;
      if (active) {
        closeButtonActive("burger", "absolute", "30%", "1em", "99", "#434343");
      }
    }
  };
  return (
    <nav className={styles.navbar}>
      <ul className={styles.ul}>
        <li className={styles.brandName}>
          <Tilt>
            <div className={styles.img}>
              <Image
                src={img}
                layout="intrinsic"
                alt="brandName"
                priority="true"
              />
            </div>
          </Tilt>

          <Tilt tiltMaxAngleX={30}>
            <div className={styles.profilePic}></div>
          </Tilt>
        </li>
        <li className={styles.secondList}>
          <Tilt>
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
                I am an aspiring economist with interest in various fields such
                as <span>world-economics</span>, <span>macroeconomics</span> and{" "}
                <span>microeconomics</span>. I have great expertise in{" "}
                <span>International economics</span>.
              </p>
            </div>
          </Tilt>
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
      <Tilt className={styles.tilt} perspective="1200">
        <div className={styles.landingImage}></div>
      </Tilt>
    </nav>
  );
}

export default Navbar;
