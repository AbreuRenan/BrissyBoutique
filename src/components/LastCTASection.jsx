import styles from "./LastCTASection.module.css";
import ButtonCTA from "./ButtonCTA";

function LastCTASection() {
  return (
    <section id="contato" className={`${styles.LastCTASection}`}>
      <div className={styles.textWrapper}>
        <h1>E aí? Pronta para fazer seu pedido?</h1>
        <p>Descubra o Poder da Elegância com Brissy</p>
        <p>
          Deixe a sua feminilidade brilhar e arrase em grande estilo! Pronta
          para se destacar com a moda mais ousada e sofisticada?
        </p>
        <p>
          Clique no botão abaixo e entre no mundo da elegância e moda feminina
          da Brissy.
        </p>

        <ButtonCTA className={`${styles.lastCTA}`} />
      </div>
    </section>
  );
}

export default LastCTASection;
