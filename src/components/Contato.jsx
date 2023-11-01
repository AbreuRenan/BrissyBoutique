import React from "react";
import ButtonCTA from "./ButtonCTA";
import styles from "./Contato.module.css";
import shopfast from "../assets/imgs/shopfast.png";

function Contato() {
  const [observador, setObservador] = React.useState(null);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  React.useEffect(() => {
    const newObserver = new IntersectionObserver(observerHandler, options);
    setObservador(newObserver);
    return () => newObserver.disconnect();
  }, []);

  React.useEffect(() => {
    if (observador) {
      const elementoObservado = document.getElementById("contato");
      observador.observe(elementoObservado);
      return () => {
        observador.disconnect();
      };
    }
  }, [observador]);

  function observerHandler(elementosNaTela, observador) {
    elementosNaTela.forEach((elementoNaTela) => {
      const h = document.querySelectorAll("#contato h1");
      const ps = document.querySelectorAll("#contato p");
      if (elementoNaTela.isIntersecting) {
        ps.forEach((p) => p.classList.add("animaUp"));
        h.forEach((h) => h.classList.add("animaUp"));
      }
    });
  }
  return (
    <section id="contato" className={`${styles.contatSection}`}>
      <div className={styles.textWrapper}>
        <h1>
          Conheça mais da <span className="title">Brissy Boutique</span>
        </h1>
        <p>
          Quer conhecer ainda mais a Brissy? Entre em contato e veja nosso
          catálogo ou agende uma visita no seu local.
        </p>
        <p>Experimente na hora e fique apenas com o que gostar!</p>
        <ButtonCTA />
      </div>
      <div>
        <img
          src={shopfast}
          alt="Compras Silhoueta"
          className={`${styles.shopfast}`}
        />
      </div>
    </section>
  );
}

export default Contato;
