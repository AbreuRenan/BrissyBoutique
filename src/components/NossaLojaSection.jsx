import React from "react";
import styles from "./NossaLojaSection.module.css";
import loja1 from "../assets/imgs/fotos/loja1.jpeg";
import loja2 from "../assets/imgs/fotos/loja2.jpeg";
import loja3 from "../assets/imgs/fotos/loja3.jpeg";

function NossaLojaSection() {
  return (
    <section className={`${styles.NossaLojaSection}`}>
      <h1>Quer fazer uma visita ao nosso Espaço?</h1>
      <div className={`${styles.galeriaLoja}`}>
        <img src={loja1} alt="" />
        <img src={loja2} alt="" />
        <img src={loja3} alt="" />
      </div>
    </section>
  );
}

export default NossaLojaSection;
