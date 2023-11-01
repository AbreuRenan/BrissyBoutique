import React from "react";
import styles from "./ComoChegarSections.module.css";
function ComoChegarSections() {
  return (
    <section className={`${styles.ComoChegarSections}`}>
      <h1>Como Chegar</h1>
      <p>R. das Clívias, 31 - Panorama, Uberlândia - MG, 38413-633</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.3920324054397!2d-48.34682662559468!3d-18.958286208785342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a4433dfcab1a1f%3A0xb630e55916cf1c75!2sR.%20das%20Cl%C3%ADvias%2C%2031%20-%20Panorama%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038413-633!5e0!3m2!1spt-BR!2sbr!4v1698802688065!5m2!1spt-BR!2sbr"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.mapa}
      ></iframe>
    </section>
  );
}

export default ComoChegarSections;
