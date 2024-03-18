import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import PresentationSara from "./PresentationSara";

import BanderolePhotos from "./BanderolePhotos";

function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Navigation />
      <BanderolePhotos />
      <PresentationSara />
    </div>
  );
}

export default Home;
