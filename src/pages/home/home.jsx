import React, { useContext, useEffect } from "react";
import Styles from "./home.module.css";
import backgroundImage from "../../assets/home/background-home-mobile.jpg";
import Article from "../../components/Article/Article";
import { BackgroundContext } from "../../context/MyContext";

const Home = () => {
  const content =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam zquas ad delectus pariatur libero eveniet fugit doloremque architecto veniam officia obcaecati voluptatibus, corrupti non cum quis beatae molestiae corporis ipsa.";

  const { setUrl } = useContext(BackgroundContext);
  useEffect(() => {
    setUrl(backgroundImage);
  }, [backgroundImage]);

  return (
    <div className={`${Styles.home}`}>
      <section className={Styles.header}>
        <h4>SO, YOU WANT TO TRAVEL TO</h4>

        <div className={Styles.sub__cont_1}>
          <h1>SPACE</h1>
          <Article content={content} />
        </div>
      </section>

      <section>
        <div className={Styles.explore}>EXPLORE</div>
      </section>
    </div>
  );
};

export default Home;
