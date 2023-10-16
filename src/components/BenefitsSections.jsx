import styles from "./BenefitsSections.module.css";

import entragasicone from "../assets/icons/Entrega.svg";
import formaspagicone from "../assets/icons/FormasPagamento.svg";
import whatsapp from "../assets/icons/CompreWhatsapp.svg";
import casa from "../assets/icons/CompreEmCasa.svg";

function BenefitsSections() {
  return (
    <section className={`${styles.benefitsSection}`}>
      <img className={`${styles.benefitsIcons}`} src={entragasicone} />
      <img className={`${styles.benefitsIcons}`} src={whatsapp} />
      <img className={`${styles.benefitsIcons}`} src={formaspagicone} />
      <img className={`${styles.benefitsIcons}`} src={casa} />
      <p className={`${styles.benefitsTexts}`}>Taxa fixa para Uberlândia</p>
      <p className={`${styles.benefitsTexts}`}>Compras Pelo WhatsApp</p>
      <p className={`${styles.benefitsTexts}`}>Diversas Formas de Pagamento</p>
      <p className={`${styles.benefitsTexts}`}>Compre sem sair de Casa</p>
    </section>
  );
}

export default BenefitsSections;
