import Article from "../components/Article/Article";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={`${styles.bg}`}>
      <h5>SO, YOU WANT TO TRAVEL TO</h5>
      <h1>SPACE</h1>
      <Article/>
      <div>
        <p className={styles.explore}>EXPLORE</p>
      </div>
    </div>
  );
};

export default Home;
