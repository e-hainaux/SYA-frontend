import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import logoSYA from "../public/images/logoSYA.svg";

function Header() {
  return (
    <div className={styles.headerGlobal}>
      <div className={styles.headerMainContainer}>
        <h1 className={styles.hidden}>SYA</h1>
        <h2 className={styles.hidden}>SARA YOGA ARRAS</h2>
        <div className={styles.img}>
          <Image
            src={logoSYA}
            alt="Image LOGO"
            min-width={300}
            min-height={300}
          />
        </div>
        <q>Des pauses dans la pose guidées par quelques proses.</q>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <ScrollLink
              className={styles.a}
              to="presentationSara"
              smooth={true}
              duration={500}
            >
              Sara
            </ScrollLink>

            <ScrollLink
              className={styles.a}
              to="presentationYoga"
              smooth={true}
              duration={500}
            >
              Prestations
            </ScrollLink>

            <ScrollLink
              className={styles.a}
              to="temoignages"
              smooth={true}
              duration={500}
            >
              Témoignages
            </ScrollLink>

            <ScrollLink
              className={styles.a}
              to="actus"
              smooth={true}
              duration={500}
            >
              Actus
            </ScrollLink>
            <ScrollLink
              className={styles.a}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </ScrollLink>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
