import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import PresentationSara from "../components/PresentationSara";

function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <PresentationSara />
    </div>
  );
}

export default Home;
