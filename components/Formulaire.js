import React, { useState } from "react";
import styles from "../styles/Formulaire.module.css";

const Formulaire = () => {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [societe, setSociete] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [commentaire, setCommentaire] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérification des champs obligatoires
    if (!prenom || !nom || (!email && !telephone)) {
      setMessage(
        "Les champs prénom, nom et au moins un moyen de contact (email ou téléphone) sont obligatoires."
      );
      return;
    }

    // Données à envoyer au backend
    const formData = {
      prenom,
      nom,
      societe,
      email,
      telephone,
      commentaire,
    };

    try {
      // Envoi des données au backend
      const response = await fetch("http://localhost:3000/form/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Votre formulaire a été soumis avec succès.");
      } else {
        setMessage("Erreur lors de l'envoi du formulaire. Veuillez réessayer.");
      }
    } catch (error) {
      setMessage("Erreur lors de l'envoi du formulaire. Veuillez réessayer.");
      console.error("Erreur lors de l'envoi du formulaire:", error);
    }

    // Réinitialisation du formulaire après soumission
    setPrenom("");
    setNom("");
    setSociete("");
    setEmail("");
    setTelephone("");
    setCommentaire("");
  };

  return (
    <section id="Formulaire" className={styles.segment}>
      <h2 className={styles.titre}>Contact</h2>
      <div className={styles.formulaireContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="prenom">Prénom *</label>
            <input
              type="text"
              id="prenom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="nom">Nom *</label>
            <input
              type="text"
              id="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="societe">Société</label>
            <input
              type="text"
              id="societe"
              value={societe}
              onChange={(e) => setSociete(e.target.value)}
              className={styles.input}
            />
          </div>
          <p className={styles.info}>
            - Veuillez renseigner au moins l'un des champs mail ou téléphone -
          </p>
          <div className={styles.formGroup}>
            <label htmlFor="email">Adresse mail *</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="telephone">Numéro de téléphone *</label>
            <input
              type="tel"
              id="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="commentaire">Commentaire</label>
            <textarea
              id="commentaire"
              value={commentaire}
              onChange={(e) => setCommentaire(e.target.value)}
              className={styles.textarea}
            ></textarea>
          </div>
          <div className={styles.message}>{message}</div>
          <div className={styles.btnContainer}>
            <button type="submit" className={styles.button}>
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Formulaire;
