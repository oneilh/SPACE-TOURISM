import { useContext, useEffect, useState } from "react";
import { appContext } from "../../context/appContext";
import Styles from "./technology.module.css";
import { technology } from "../../data/db.json";
import Title from "../../components/Title";

const Technology = () => {
  const { dispatch } = useContext(appContext);

  const [techName, setTechName] = useState(technology[0].name);
  const [activeTech, setActiveTech] = useState([]);

  //bgImage initialize
  useEffect(() => {
    dispatch({ type: "BG_TECHNOLOGY", value: "technology" });
  }, []);

  const handleTech = (name) => {
    if (techName !== name) {
      setTechName(name);
    }
  };

  useEffect(() => {
    const techDetails = technology.filter((tech_name) => {
      return tech_name.name == techName;
    });
    setActiveTech(techDetails);
  }, [techName]);

  const { name, images, description } =
    activeTech.length > 0 ? activeTech[0] : {};

  const { landscape, portrait } = images ? images : {};
  const HEADING = "the technology...";

  const {
    technologyPage_container,
    technology_img__sm,
    technology_img__lg,
    body,
    body_item1,
    img_tracker,
    img_tacker_container,
    active,
    content,
  } = Styles;

  return (
    <div className={`page_container ${technologyPage_container}`}>
      <Title no="03" title="space launch 101" />
      <img src={landscape} className={technology_img__sm} />
      <section className={body}>
        <section className={`details_container ${body_item1}`}>
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
          <section className={content}>
            <section className="content_heading">
              <p>
                <span>{name ? HEADING.toUpperCase() : ""}</span>
              </p>

              <h2>{name ? name.toUpperCase() : ""}</h2>
            </section>

            <p>{description}</p>
          </section>
        </section>

        <img src={portrait} className={technology_img__lg} />
      </section>
    </div>
  );
};

export default Technology;
