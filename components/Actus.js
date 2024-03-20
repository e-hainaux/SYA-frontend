import React from "react";
import styles from "../styles/SectionCSS.module.css";

export default function Actus() {
  return (
    <section className={styles.segment} id="Actus">
      <h2 className={styles.titre}>Actualités de SYA</h2>
      <p className={styles.paragraphe}>
        Lancement du site internet SYA ! L'année 2024 voit l'arrivée de ce tout
        nouveau site qui a vocation à promouvoir mes activités ainsi qu'à vous
        informer des dernières actualités de SYA. Vous trouverez également un
        formulaire de contact pour toute demande complémentaire d'information.
      </p>
    </section>
  );
}
