import styles from "../styles/Home.module.css";
import React, { useState } from "react";

import CookieConsent from "react-cookie-consent";

import Header from "../components/Header";
import Navigation from "../components/Navigation";
import PresentationSara from "./PresentationSara";
import BanderolePhotos from "./BanderolePhotos";
import Break from "./Break";
import Prestations from "./Prestations";
import Temoignages from "./Temoignages";
import Actus from "./Actus";
import Footer from "./Footer";
import Formulaire from "./Formulaire";
import ScrollToTopButton from "./ScrollToTopButton";

function Home() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  const handleAcceptCookies = () => {
    setCookiesAccepted(true);
    // CookieConsent.renewConsent();
  };

  return (
    <div className={styles.main}>
      {cookiesAccepted ? null : (
        <CookieConsent
          location="bottom"
          buttonText="Accepter"
          cookieName="my-functional-cookies"
          layout="stacked"
          style={{
            color: "whitesmoke",
            background: "gray",
            border: "1px solid #ddd",
            justifyContent: "center",
          }}
          contentStyle={{ flex: "0 0 100%", textAlign: "center" }}
          buttonStyle={{
            background: "black",
            color: "whitesmoke",
            fontWeight: "bolder",
            borderRadius: 5,
          }}
          expires={7}
          onAccept={handleAcceptCookies}
          overlay
        >
          Ce site utilise uniquement des cookies fonctionnels pour améliorer
          votre expérience.
        </CookieConsent>
      )}
      <Header />
      <Navigation />
      <ScrollToTopButton />
      <BanderolePhotos />
      <PresentationSara />
      <Break />
      <Prestations />
      <Break />
      <Temoignages />
      <Break />
      <Actus />
      <Break />
      <Formulaire />
      <Footer />
    </div>
  );
}

export default Home;
