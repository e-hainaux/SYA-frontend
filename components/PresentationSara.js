import React from "react";
import styles from "../styles/presentationSara.module.css";
import Image from "next/image";

import photoSara from "../public/images/PhotoSara.jpg";

const PresentationSara = () => {
  return (
    <section id="PresentationSara" className={styles.segment}>
      <h2 className={styles.titre}>- Sara Lovera -</h2>
      <div className={`${styles.textePhoto}`}>
        <div className={`${styles.imageWrapper}`}>
          <div
            className={`${styles.imageContainer} ${styles.imageContainerLargeScreen}`}
          >
            <Image
              src={photoSara}
              alt="Sara Lovera - photo"
              className={styles.photoSara}
            />
          </div>
        </div>
        <p className={styles.paragraphe}>
          Il a fallu des années de pratique, un voyage, une confidence, les
          encouragements de mon cher et tendre, et me voilà formée au Hatha Yoga
          depuis 2018. J'ambitionne de partager le Yoga avec un maximum de
          personnes. Cet outil merveilleux est à diffuser auprès de tous, les
          jeunes, les moins jeunes, issus de tous les milieux... Je m'adapte, ou
          plutôt le Yoga s'adapte. Pas besoin d'être souple, acrobatique ou
          "perché", il suffit d'en avoir envie, et le yoga sera rapidement
          essentiel à votre bien-être.
        </p>
      </div>
    </section>
  );
};

export default PresentationSara;
