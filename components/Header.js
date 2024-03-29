import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";

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
            width="80%"
            height="80%"
          />
        </div>
        <q>Des pauses dans la pose guidées par quelques proses.</q>
      </div>
    </div>
  );
}

export default Header;
