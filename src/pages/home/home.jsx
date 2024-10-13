import React, { useContext, useEffect } from "react";
import Styles from "./home.module.css";
import { appContext } from "../../context/appContext";

const Home = () => {
  const { dispatch } = useContext(appContext);

  //bgImage initialize
  useEffect(() => {
    dispatch({ type: "BG_HOME", value: "home" });
  }, []);

  const content =
    "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!";

  return (
    <main className={`${Styles.home}`}>
      <section className={Styles.header}>
        <p>SO, YOU WANT TO TRAVEL TO</p>

        <div className={Styles.sub__cont_1}>
          <h1>SPACE</h1>
          <p>{content}</p>
        </div>
      </section>
      <div className={Styles.explore}>EXPLORE</div>
    </main>
  );
};

export default Home;
