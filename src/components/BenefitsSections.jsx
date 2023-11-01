import styles from "./BenefitsSections.module.css";

import entragasicone from "../assets/icons/Entrega.svg";
import formaspagicone from "../assets/icons/FormasPagamento.svg";
import whatsapp from "../assets/icons/CompreWhatsapp.svg";
import casa from "../assets/icons/CompreEmCasa.svg";

function BenefitsSections() {
  return (
    <section className={`${styles.benefitsSection}`}>
      <div>
        <img className={`${styles.benefitsIcons}`} src={entragasicone} />
        <p className={`${styles.benefitsTexts}`}>Taxa fixa para Uberlândia</p>
      </div>
      <div>
        <img className={`${styles.benefitsIcons}`} src={whatsapp} />
        <p className={`${styles.benefitsTexts}`}>Compras Pelo WhatsApp</p>
      </div>
      <div>
        <img className={`${styles.benefitsIcons}`} src={formaspagicone} />
        <p className={`${styles.benefitsTexts}`}>
          Diversas Formas de Pagamento
        </p>
      </div>
      <div>
        <img className={`${styles.benefitsIcons}`} src={casa} />
        <p className={`${styles.benefitsTexts}`}>Compre sem sair de Casa</p>
      </div>
    </section>
  );
}

export default BenefitsSections;
