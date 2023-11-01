import styles from "./HeroSection.module.css";
function ButtonCTA({ className }) {
  return (
    <a
      className={`${styles.linkCTA} ${className}`}
      href="https://wa.me/+553497997750"
    >
      Fale com uma Vendedora
    </a>
  );
}

export default ButtonCTA;
