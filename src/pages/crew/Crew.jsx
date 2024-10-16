import { useContext, useEffect, useState } from "react";
import { appContext } from "../../context/appContext";
import Styles from "./crew.module.css";
import Title from "../../components/Title";
import { crew } from "../../data/db.json";
import Img from "../../components/Img";

const Crew = () => {
  const { dispatch } = useContext(appContext);

  const [crewName, setCrewName] = useState(crew[0].name);
  const [activeCrew, setActiveCrew] = useState([]);

  //==bgImage initialize
  useEffect(() => {
    dispatch({ type: "BG_CREW", value: "crew" });
  }, []);

  const showCrew = (name) => {
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
  const {
    crewPageContainer,
    title,
    crew_img,
    img_tracker,
    img_tracker__inactive,
    img_tracker__active,
    body,
    body_item2,
    crewInfo,
    crewTitle,
  } = Styles;

  const { name, bio, images, role } =
    activeCrew.length > 0 ? activeCrew[0] : {};
  const { png } = images ? images : {};

  return (
    <div className={`page_container ${crewPageContainer}`}>
      <div className={`${title}`}>
        <Title no="02" title="meet your crew" />
      </div>

      <div className={body}>
        <section className={crew_img}>
          <Img png={png} />
        </section>

        <section className={`line details_container ${body_item2}`}>
          <section className={img_tracker}>
            {crew.map((crew) => {
              const { name } = crew;

              return (
                <div
                  key={name}
                  className={`clickable ${img_tracker__inactive} ${
                    crewName === name ? img_tracker__active : null
                  }`}
                  onClick={() => showCrew(name)}
                ></div>
              );
            })}
          </section>

          <section className={crewInfo}>
            <section className={`content_heading`}>
              <p className={`dark-txt  ${crewTitle}`}>
                <span>{role ? role.toUpperCase() : ""}</span>
              </p>

              <p className={`text-big`}>{name ? name.toUpperCase() : ""}</p>
            </section>

            <p>{bio}</p>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Crew;
