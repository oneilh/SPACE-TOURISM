import { useContext, useEffect } from "react";
import { appContext } from "../../context/appContext";
import backgroundImage from "../../assets/technology/background-technology-mobile.jpg";
import Styles from "./technology.module.css";
import { technology } from "../../data/db.json";
import Title from "../../components/Title";

const Technology = () => {
  const { dispatch } = useContext(appContext);

  useEffect(() => {
    dispatch({ type: "bgUpdate", value: backgroundImage });
  });

  return (
    <div className="page_container">
      <Title no="03" title="space launch 101" />
      <section
        style={{
          backgroundColor: "red",
          height: "200px",
          width: "100vw",
        }}
      ></section>
      <section style={{display: 'flex', gap: '1rem'}}>
        {technology.map((tech) => {
          return <div key={tech.name} style={{
            height: '2.5rem',
            width: '2.5rem',
            borderRadius: '50%',
            backgroundColor: 'blue',
            
          }}></div>;
        })}
      </section>
    </div>
  );
};

export default Technology;
