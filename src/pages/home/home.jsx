import React, { useContext, useEffect } from "react";
import Styles from "./home.module.css";
import backgroundImage from "../../assets/home/background-home-mobile.jpg";
import { BackgroundContext } from "../../context/MyContext";

const Home = () => {
  const content =
    "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!";

  const { setUrl } = useContext(BackgroundContext);
  useEffect(() => {
    setUrl(backgroundImage);
  }, []);

  return (
    <div className={`${Styles.home}`}>
      <section className={Styles.header}>
        <h4>SO, YOU WANT TO TRAVEL TO</h4>

        <div className={Styles.sub__cont_1}>
          <h1>SPACE</h1>
          <p>{content}</p>
        </div>
      </section>

      <section>
        <div className={Styles.explore}>EXPLORE</div>
      </section>
    </div>
  );
};

export default Home;
