import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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

  return (
    <header className={`${styles.header}`}>
      {mobileState && (
        <nav
          className={`${styles.mobileHeader} ${
            mobileMenu && styles.navMobileActive
          }`}
        >
          <NavLink to="/">
            <img src={logo} alt="logo img" className={`${styles.logo}`} />
          </NavLink>
          <button
            aria-label="Menu mobile"
            className={`${styles.mobileButton} ${
              mobileMenu && styles.mobileButtonActive
            }`}
            onClick={() => setMobileMenu(!mobileMenu)}
          ></button>
        </nav>
      )}

      <nav
        className={`
            ${mobileState ? styles.navMobile : styles.navmenu} 
            ${mobileMenu && styles.navMobileActive} `}
      >
        {!mobileState && (
          <Link to="/#">
            <img src={logo} alt="logo img" className={`${styles.logo}`} />
          </Link>
        )}
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
