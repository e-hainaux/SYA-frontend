import styles from "../styles/Home.module.css";

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

function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Navigation />
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
