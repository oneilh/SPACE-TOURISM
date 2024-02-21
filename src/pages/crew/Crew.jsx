import { useContext, useEffect, useState } from "react";
import { appContext } from "../../context/appContext";
import backgroundImage from "../../assets/crew/background-crew-mobile.jpg";
import Styles from "./crew.module.css";
import Title from "../../components/Title";
import { crew } from "../../data/db.json";
import Img from "../../components/Img";

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
  const { active, img_tracker, item, crew_container } =
    Styles;

  const { name, bio, images, role } =
    activeCrew.length > 0 ? activeCrew[0] : {};
  const { png } = images ? images : {};

  return (
    <div className="page_container">
      <Title no="02" title="meet your crew" />

      <div className={crew_container}>
        <Img png={png} />

        <section className="line details_container">
          <section className={img_tracker}>
            {crew.map((crew) => {
              const { name } = crew;

              return (
                <div
                  key={name}
                  className={`clickable ${item} ${crewName === name ? active : null}`}
                  onClick={() => handleCrew(name)}
                ></div>
              );
            })}
          </section>

          <section className="content_heading">
            <h5>
              <span>{role ? role.toUpperCase() : ""}</span>
            </h5>

            <h3>{name ? name.toUpperCase() : ""}</h3>
          </section>

          <p>{bio}</p>
        </section>
      </div>
    </div>
  );
};

export default Crew;
