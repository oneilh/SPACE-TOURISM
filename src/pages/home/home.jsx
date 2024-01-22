import React from "react";
import Article from "../../components/Article/Article";
import styles from "./home.module.css";

const Home = () => {
  const content =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam zquas ad delectus pariatur libero eveniet fugit doloremque architecto veniam officia obcaecati voluptatibus, corrupti non cum quis beatae molestiae corporis ipsa.";

  return (
    <div className={`${styles.home}`}>
      <div className={styles.sub__cont_1}>
        <h5>SO, YOU WANT TO TRAVEL TO</h5>
        <h1>SPACE</h1>
        <Article content={content} />
      </div>

      <section>
        <div className={styles.explore}>EXPLORE</div>
      </section>
    </div>
  );
};

export default Home;
