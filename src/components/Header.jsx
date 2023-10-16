import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import useMedia from "./CustomHooks/useMedia";

import styles from "./Header.module.css";
import logo from "../assets/imgs/logo.png";

function Header() {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const mobileState = useMedia("(max-width: 40rem)");

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  React.useEffect(() => {}, [mobileState]);

  return (
    <header className={`${styles.header}`}>
      {mobileState && (
        <>
          <NavLink to="/">
            <img src={logo} alt="logo img" />
          </NavLink>
          <button
            aria-label="Menu mobile"
            className={`${styles.mobileButton} ${
              mobileMenu && styles.mobileButtonActive
            }`}
            onClick={() => setMobileMenu(!mobileMenu)}
          ></button>
        </>
      )}
      <nav
        className={`
            ${mobileState ? styles.navMobile : styles.navmenu} 
            ${mobileMenu && styles.navMobileActive}
        `}
      >
        <div className={`${mobileMenu && styles.mobileSeparador}`}>
          <NavLink to="/">
            <img src={logo} alt="logo img" />
          </NavLink>
          {mobileState && (
            <button
              aria-label="Menu mobile"
              className={`
                ${styles.mobileButton} 
                ${mobileMenu && styles.closeButton}
            `}
              onClick={() => setMobileMenu(!mobileMenu)}
            ></button>
          )}
        </div>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="loja">Nossa Loja</NavLink>
        <NavLink to="Contato">Contato</NavLink>
      </nav>
    </header>
  );
}

export default Header;
