import React from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./NossaLojaSection.module.css";
import useMedia from "./CustomHooks/useMedia";
import loja1 from "../assets/imgs/fotos/loja1.jpeg";
import loja2 from "../assets/imgs/fotos/loja2.jpeg";
import loja3 from "../assets/imgs/fotos/loja3.jpeg";

const imgArr = [loja1, loja2, loja3];

function NossaLojaSection() {
  const [carrouselIndex, setCarrouselIndex] = React.useState(0);
  const mobileState = useMedia("(max-width: 40rem)");
  const handleSwipeLeft = () => {
    if (carrouselIndex < imgArr.length - 1) {
      setCarrouselIndex(carrouselIndex + 1);
    } else {
      setCarrouselIndex(0);
    }
  };

  const handleSwipeRight = () => {
    if (carrouselIndex > 0) {
      setCarrouselIndex(carrouselIndex - 1);
    } else {
      setCarrouselIndex(imgArr.length - 1);
    }
  };
  const swipers = useSwipeable({
    onSwipedLeft: (eventData) => handleSwipeLeft(),
    onSwipedRight: (eventData) => handleSwipeRight(),
  });

  return (
    <section className={`${styles.NossaLojaSection}`}>
      <h1>Quer conhecer nosso espaço?</h1>
      {!mobileState && (
        <div className={`${styles.galeriaLoja}`}>
          {imgArr.map((img, index) => {
            return <img src={img} alt="foto da loja" key={index} />;
          })}
        </div>
      )}

      {mobileState && (
        <div className={`${styles.galeriaLoja}`} {...swipers}>
          <img src={imgArr[carrouselIndex]} alt="" />
        </div>
      )}
    </section>
  );
}

export default NossaLojaSection;
