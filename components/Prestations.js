import React from "react";
import styles from "../styles/Prestations.module.css";

export default function Prestations() {
  return (
    <section className={styles.segment} id="Prestations">
      <h2 className={styles.titre}>Prestations</h2>
      <div className={styles.blocPrestas}>
        <div className={styles.presta}>
          <h3 className={styles.titreSecondaire}>En structure</h3>
          <p className={styles.paragraphe} id="dans-les-structures">
            Mon parcours professionnel dans le social, et ma volonté d'ouvrir le
            yoga à tous m'a permis de concevoir des sessions à données
            éducatives pour différents publics. Ici encore rien n'est figé, nous
            pouvons en discuter afin de construire une séance ou une session qui
            correspondent à vos attentes. Discutons et avançons ensemble.
          </p>
        </div>
        <div className={styles.presta}>
          <h3 className={styles.titreSecondaire}>Cours particuliers</h3>
          <p className={styles.paragraphe} id="cours-particuliers">
            Pas toujours facile de trouver le moment qui corresponde à votre
            emploi du temps professionnel, à la garde des enfants, à vos
            obligations familiales et aux heures des cours disponibles près de
            chez vous. Pourquoi ne pas tenter le cours à domicile ?
          </p>
        </div>
        <div className={styles.presta}>
          <h3 className={styles.titreSecondaire}>Cours collectifs</h3>
          <p className={styles.paragraphe} id="cours-collectifs">
            Pour le moment pas de cours collectif encore programmé. Cela viendra
            par la suite. Si vous êtes intéressé, faites le moi savoir grâce au
            formulaire de contact et je vous tiendrai informé des avancées.
          </p>
        </div>
      </div>
    </section>
  );
}
