import { useState } from "react";
import styles from "./header.module.css";
import LogoHeader from "../../assets/logo-top.svg";
import iconCloser from "../../assets/menu-closer.svg";
import iconBars from "../../assets/menu-togle.svg";
import Button from "../button/button";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={`${styles.Header} ${menuActive ? styles.active : ""}`}>
      <div className={styles.wrapperHeader}>
        <div>
          <button>
            <img src={LogoHeader} alt="" />
          </button>
        </div>
        <button onClick={toggleMenu} id={styles.menuIcons}>
          <img src={menuActive ? iconCloser : iconBars} alt="" />
        </button>
        <nav className={menuActive ? styles.active : ""}>
          <ul className={styles.ulMenu}>
            <li className={styles.navLi}>
              <a href="">Inicio</a>
            </li>
            <li className={styles.navLi}>
              <a href="">Carros</a>
            </li>
            <li className={styles.navLi}>
              <a href="">Manuntenção</a>
            </li>
            <li className={styles.navLi}>
              <a href="">Novos</a>
            </li>
            <li className={styles.liBtn}>
                <Button>Comprar</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
