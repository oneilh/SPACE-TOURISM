import { useContext, useEffect, useState } from "react";
import { BackgroundContext } from "../../context/MyContext";
import backgroundImage from "../../assets/crew/background-crew-mobile.jpg";
import Styles from "./crew.module.css";
import Title from "../../components/Title";
import { crew } from "../../data/db.json";
import Button from "../../components/button";
import { IconContext } from "react-icons";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Crew = () => {
  const { setUrl } = useContext(BackgroundContext);
  const [crewName, setCrewName] = useState(crew[0].name);
  const [activeCrew, setActiveCrew] = useState([]);
  const [hoverStatus, setHoverStatus] = useState(false);

  //destructured
  const { active, carousel, item, crew_container, details_container } = Styles;
  const { name, bio, images, role } =
    activeCrew.length > 0 ? activeCrew[0] : {};

  useEffect(() => {
    setUrl(backgroundImage);
  }, []);

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

  return (
    <div className="page_container">
      <Title no="02" title="meet your crew" />
      <div className={crew_container}>
        <section className="img_container">
          <section className="img_btn">
            <Button>
              <FaArrowLeft />
            </Button>

            <Button>
              <FaArrowRight />
            </Button>
          </section>
          <img src={images ? images.png : ""} alt="PNG image" />
        </section>

        <div className={`line ${details_container}`}>
          <section className={carousel}>
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
        </div>
      </div>
    </div>
  );
};

export default Crew;
