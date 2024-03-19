import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerMainContainer}>
      <div className={styles.footerBreakContainer}>
        <div className={styles.footerBreak}></div>
      </div>
      <div className={styles.footerContainer}>
        <footer className={styles.footer}>
          © 2024 - Site réalisé par{" "}
          <a href="https://www.linkedin.com/in/e-hainaux/" target="_blank">
            Emilien Hainaux
          </a>
        </footer>
      </div>
    </div>
  );
}
