import React from "react";

import heroImg from "../assets/imgs/estampa.png";
import styles from "./HeroSection.module.css";
import ButtonCTA from "./ButtonCTA";

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
        <ButtonCTA />
      </div>
      <img className={`${styles.heroImg}`} src={heroImg} alt="hero image" />
    </section>
  );
}

export default HeroSection;
