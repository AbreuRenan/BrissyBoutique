import React from "react";
import styles from "./Footer.module.css";

import FooterFacebook from "../assets/icons/FooterFacebook.png";
import FooterInsta from "../assets/icons/FooterInsta.png";
import FooterZap from "../assets/icons/FooterZap.png";

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <p>Brissy Boutique © 2023</p>
      <div className={`${styles.socialLinks}`}>
        <a href="https://www.facebook.com/profile.php?id=100063596996710&locale=pt_BR">
          <img src={FooterFacebook} alt="" />
        </a>
        <a href="https://www.instagram.com/divino_closettmg/">
          <img src={FooterInsta} alt="" />
        </a>
        <a href="https://wa.me/+553497997750">
          <img src={FooterZap} alt="" />
        </a>
      </div>
      <p>Desenvolvido por Renan Abreu</p>
    </footer>
  );
}

export default Footer;
