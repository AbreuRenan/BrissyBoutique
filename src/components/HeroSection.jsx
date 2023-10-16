import React from "react";

import heroImg from "../assets/imgs/estampa.png";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section className={`${styles.heroSection}`}>
      <div className={`${styles.textWrapper}`}>
        <h1 className={`${styles.headline}`}>Bem vinda à Brissy Boutique</h1>
        <p className={`${styles.headSupport}`}>
          Na nossa loja, a moda se torna uma expressão de sua personalidade.
          Oferecemos uma coleção cuidadosamente selecionada de roupas e
          acessórios que irão realçar a sua beleza e individualidade.
        </p>
        <a className={`${styles.linkCTA}`} href="https://wa.me/+553497997750">
          Fale com uma Vendedora
        </a>
      </div>
      <img className={`${styles.heroImg}`} src={heroImg} alt="hero image" />
    </section>
  );
}

export default HeroSection;
