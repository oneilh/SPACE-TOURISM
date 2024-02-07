import { useContext, useEffect, useState } from "react";
import { appContext } from "../../context/appContext";
import backgroundImage from "../../assets/crew/background-crew-mobile.jpg";
import Styles from "./crew.module.css";
import Title from "../../components/Title";
import { crew } from "../../data/db.json";
import HoverButton from "../../components/btn/HoverButton";

const Crew = () => {
  const { dispatch } = useContext(appContext);

  const [crewName, setCrewName] = useState(crew[0].name);
  const [activeCrew, setActiveCrew] = useState([]);

  //bgImage initialize
  useEffect(() => {
    dispatch({ type: "bgUpdate", value: backgroundImage });
  }, [backgroundImage]);

  const handleCrew = (name) => {
    if (crewName !== name) {
      setCrewName(name);
    }
  };

  useEffect(() => {
    const crewDetails = crew.filter((crw) => {
      return crw.name == crewName;
    });
    setActiveCrew(crewDetails);
  }, [crewName]);

  //destructured values
  const { active, img_tracker, item, crew_container, details_container } = Styles;

  const { name, bio, images, role } =
    activeCrew.length > 0 ? activeCrew[0] : {};

  return (
    <div className="page_container">
      <Title no="02" title="meet your crew" />

      <div className={crew_container}>
        <section
          className="img_container"
          onMouseOver={() => dispatch({ type: "hover", value: true })}
          onMouseOut={() => dispatch({ type: "hover", value: false })}
        >
          <HoverButton />
          <img src={images ? images.png : ""} alt="PNG image" />
        </section>

        <section className={`line ${details_container}`}>
          <section className={img_tracker}>
            {crew.map((crew) => {
              const { name } = crew;

              return (
                <div
                  key={name}
                  className={`${item} ${crewName === name ? active : null}`}
                  onClick={() => handleCrew(name)}
                ></div>
              );
            })}
          </section>

          <section>
            <h4>
              <span>{role ? role.toUpperCase() : ""}</span>
            </h4>
            <h3>{name ? name.toUpperCase() : ""}</h3>
          </section>
          <p>{bio}</p>
        </section>
      </div>
    </div>
  );
};

export default Crew;
