import React from "react";
import styles from "../styles/Break.module.css";

export default function Break() {
  return (
    <div className={styles.breakerMainContainer}>
      <div className={styles.breakerContainer}>
        <div className={styles.breaker}></div>
      </div>
    </div>
  );
}
