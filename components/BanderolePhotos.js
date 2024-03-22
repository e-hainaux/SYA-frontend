import React from "react";
import styles from "../styles/BanderolePhotos.module.css";
import Image from "next/image";
import yogaGroup1 from "../public/images/yogaGroup1.png";
import yogaUpperView from "../public/images/yogaUpperView.jpg";
import yogaGroup2 from "../public/images/yogaGroup2.jpg";

const BanderolePhotos = () => {
  return (
    <section className={styles.banderolePhotos}>
      <div className={styles.containerPhoto}>
        <Image className={styles.objectFit} src={yogaGroup1} alt="yoga group" />
      </div>

      <div className={styles.containerPhoto}>
        <Image
          className={styles.objectFit}
          src={yogaUpperView}
          alt="yoga upper view"
          // objectFit="contain"
        />
      </div>

      <div className={styles.containerPhoto}>
        <Image className={styles.objectFit} src={yogaGroup2} alt="yoga group" />
      </div>
    </section>
  );
};

export default BanderolePhotos;
