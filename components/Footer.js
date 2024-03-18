import React from "react";
import styles from "../styles/Break.module.css";

export default function Footer() {
  return (
    <div className={styles.footerMainContainer}>
      <footer className={styles.footer}>
        © 2023 - Site réalisé par{" "}
        <a href="https://www.linkedin.com/in/e-hainaux/">Emilien Hainaux</a>
      </footer>
    </div>
  );
}
