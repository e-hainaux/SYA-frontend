import React from "react";
import styles from "../styles/Temoignages.module.css";

export default function Temoignages() {
  return (
    <section className={styles.segment} id="temoignages">
      <h2 className={styles.titre}>- Témoignages -</h2>
      <p className={styles.carrousel}>
        Je n'avais jamais pratiqué le yoga avant de rencontrer Sara et j'avais
        des clichés en tête sur cette pratique tant sur la souplesse et la
        difficulté, ayant vu des séquences où j'avais l'impression qu'il fallait
        être gymnaste pour être adepte ! Mais que nenni, Sara sait mettre
        parfaitement à l'aise et nous apprend à être à l'écoute des limites de
        notre corps, chacune des séances est différente et le temps passe vite,
        mais c'est si bon de prendre du temps pour soi ! La séance se clôt par
        un temps de méditation et Sara ne manque pas de partager quelques
        notions sur la philosophie indienne, on sort détendu et moins bête :
        elle est pas belle la vie !
      </p>
    </section>
  );
}
