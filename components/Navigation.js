import React, { useState } from "react";
import styles from "../styles/Navigation.module.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Navigation() {
  const [isHoveredSara, setIsHoveredSara] = useState(false);
  const [isHoveredPrestations, setIsHoveredPrestations] = useState(false);
  const [isHoveredTemoignages, setIsHoveredTemoignages] = useState(false);
  const [isHoveredActus, setIsHoveredActus] = useState(false);
  const [isHoveredContact, setIsHoveredContact] = useState(false);

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.linkContainer}>
            <ScrollLink
              className={`${isHoveredSara ? styles.hovered : styles.a} ${
                styles.pointer
              }`}
              to="PresentationSara"
              smooth={false}
              duration={800}
              onMouseEnter={() => setIsHoveredSara(true)}
              onMouseLeave={() => setIsHoveredSara(false)}
            >
              Sara
            </ScrollLink>
          </li>
          <li className={styles.linkContainer}>
            <ScrollLink
              className={`${isHoveredPrestations ? styles.hovered : styles.a} ${
                styles.pointer
              }`}
              to="Prestations"
              smooth={true}
              duration={500}
              onMouseEnter={() => setIsHoveredPrestations(true)}
              onMouseLeave={() => setIsHoveredPrestations(false)}
            >
              Prestations
            </ScrollLink>
          </li>
          <li className={styles.linkContainer}>
            <ScrollLink
              className={`${isHoveredTemoignages ? styles.hovered : styles.a} ${
                styles.pointer
              }`}
              to="Temoignages"
              smooth={true}
              duration={500}
              onMouseEnter={() => setIsHoveredTemoignages(true)}
              onMouseLeave={() => setIsHoveredTemoignages(false)}
            >
              Témoignages
            </ScrollLink>
          </li>
          <li className={styles.linkContainer}>
            <ScrollLink
              className={`${isHoveredActus ? styles.hovered : styles.a} ${
                styles.pointer
              }`}
              to="Actus"
              smooth={true}
              duration={500}
              onMouseEnter={() => setIsHoveredActus(true)}
              onMouseLeave={() => setIsHoveredActus(false)}
            >
              Actus
            </ScrollLink>
          </li>
          <li className={styles.linkContainer}>
            <ScrollLink
              className={`${isHoveredContact ? styles.hovered : styles.a} ${
                styles.pointer
              }`}
              to="Formulaire"
              smooth={true}
              duration={500}
              onMouseEnter={() => setIsHoveredContact(true)}
              onMouseLeave={() => setIsHoveredContact(false)}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
