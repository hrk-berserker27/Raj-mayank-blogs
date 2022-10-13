import React from "react";
import style from "../styles/Footer.module.css";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className={style.footer}>
      <p>
        &lt;/&gt; by Hritick with <FaHeart className={style.heart} />
      </p>
    </footer>
  );
}

export default Footer;
