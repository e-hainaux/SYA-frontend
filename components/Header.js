import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import logoSYA from "../public/images/logoSYA.svg";

function Header() {
  const [isHoveredSara, setIsHoveredSara] = useState(false);
  const [isHoveredPrestations, setIsHoveredPrestations] = useState(false);
  const [isHoveredTemoignages, setIsHoveredTemoignages] = useState(false);
  const [isHoveredActus, setIsHoveredActus] = useState(false);
  const [isHoveredContact, setIsHoveredContact] = useState(false);

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
              className={`${isHoveredSara ? styles.hovered : styles.a} ${
                styles.pointer
              }`}
              to="presentationSara"
              smooth={false}
              duration={800}
              onMouseEnter={() => setIsHoveredSara(true)}
              onMouseLeave={() => setIsHoveredSara(false)}
            >
              Sara
            </ScrollLink>

            <ScrollLink
              className={`${isHoveredPrestations ? styles.hovered : styles.a} ${
                styles.pointer
              }`}
              to="presentationYoga"
              smooth={true}
              duration={500}
              onMouseEnter={() => setIsHoveredPrestations(true)}
              onMouseLeave={() => setIsHoveredPrestations(false)}
            >
              Prestations
            </ScrollLink>

            <ScrollLink
              className={`${isHoveredTemoignages ? styles.hovered : styles.a} ${
                styles.pointer
              }`}
              to="temoignages"
              smooth={true}
              duration={500}
              onMouseEnter={() => setIsHoveredTemoignages(true)}
              onMouseLeave={() => setIsHoveredTemoignages(false)}
            >
              Témoignages
            </ScrollLink>

            <ScrollLink
              className={`${isHoveredActus ? styles.hovered : styles.a} ${
                styles.pointer
              }`}
              to="actus"
              smooth={true}
              duration={500}
              onMouseEnter={() => setIsHoveredActus(true)}
              onMouseLeave={() => setIsHoveredActus(false)}
            >
              Actus
            </ScrollLink>

            <ScrollLink
              className={`${isHoveredContact ? styles.hovered : styles.a} ${
                styles.pointer
              }`}
              to="contact"
              smooth={true}
              duration={500}
              onMouseEnter={() => setIsHoveredContact(true)}
              onMouseLeave={() => setIsHoveredContact(false)}
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
