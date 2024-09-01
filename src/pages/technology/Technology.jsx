import { useContext, useEffect, useState } from "react";
import { appContext } from "../../context/appContext";
import backgroundImage from "../../assets/technology/background-technology-mobile.jpg";
import Styles from "./technology.module.css";
import { technology } from "../../data/db.json";
import Title from "../../components/Title";
import Img from "../../components/Img";

const Technology = () => {
  const { dispatch } = useContext(appContext);

  const [techName, setTechName] = useState(technology[0].name);
  const [activeTech, setActiveTech] = useState([]);

  //bgImage initialize
  useEffect(() => {
    dispatch({ type: "bgUpdate", value: backgroundImage });
  }, []);

  const handleTech = (name) => {
    if (techName !== name) {
      setTechName(name);
    }
  };

  useEffect(() => {
    const techDetails = technology.filter((techn) => {
      return techn.name == techName;
    });
    setActiveTech(techDetails);
  }, [techName]);

  const { img_container, img, img_tracker, img_tacker_container, active } =
    Styles;
  const { name, images, description } =
    activeTech.length > 0 ? activeTech[0] : {};

  const { landscape, portrait } = images ? images : {};
  const HEADING = "the technology...";

  return (
    <div className="page_container">
      <Title no="03" title="space launch 101" />

      <section className={`${img_container}`}>
        <img src={landscape} className={img} />
      </section>

      <section className="details_container">
        <section className={img_tacker_container}>
          {technology.map((tech, index) => {
            const { name } = tech;
            return (
              <div
                key={name}
                className={`clickable ${img_tracker} ${
                  techName === name ? active : null
                }`}
                onClick={() => handleTech(name)}
              >
                <div>{index + 1}</div>
              </div>
            );
          })}
        </section>

        <section className="content_heading">
          <p>
            <span>{name ? HEADING.toUpperCase() : ""}</span>
          </p>

          <h2>{name ? name.toUpperCase() : ""}</h2>
        </section>

        <p>{description}</p>
      </section>
    </div>
  );
};

export default Technology;
