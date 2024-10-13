import { useContext, useEffect, useState } from "react";
import { appContext } from "../../context/appContext";
import Styles from "./destination.module.css";
import { destinations } from "../../data/db.json";
import Title from "../../components/Title";
import Img from "../../components/Img";

const Destination = () => {
  const { dispatch } = useContext(appContext);

  const [planetName, setPlanetName] = useState(destinations[0].name);
  const [activePlanet, setActivePlanet] = useState([]);

  //bg
  useEffect(() => {
    dispatch({ type: "BG_DESTINATION", value: "destination" });
  }, []);

  const planetSelection = (name) => {
    if (planetName !== name) {
      setPlanetName(name);
    }
  };

  useEffect(() => {
    const selectedPlanet = destinations.filter((desc) => {
      const { name } = desc;
      return planetName == name;
    });
    setActivePlanet(selectedPlanet);
  }, [planetName]);


  //?destructured properties
  const { description, distance, name, travel, images } =
    activePlanet.length > 0 ? activePlanet[0] : {};
  const { png } = images ? images : {};

  return (
    <div className="page_container">
      <Title no="01" title="pick your destination" />

      <div className="details_container">
        <Img png={png} />

        <ul className={Styles.planet_list}>
          {destinations.map((planet) => {
            const { name } = planet;

            return (
              <li
                key={name}
                onClick={() => planetSelection(name)}
                className={planetName === name ? Styles.active : null}
              >
                {name.toUpperCase()}
              </li>
            );
          })}
        </ul>

        <section>
          <h2>{name ? name.toUpperCase() : ""}</h2>
          <p>{description ? description : ""}</p>
        </section>

        <section className={`line ${Styles.extra}`}>
          <div className={Styles.facts}>
            <p>AVG. DISTANCE</p>
            <p className="text-big">{distance ? distance.toUpperCase() : ""}</p>
          </div>

          <div className={Styles.facts}>
            <p>EST. TRAVEL TIME</p>
            <p className="text-big">{travel ? travel.toUpperCase() : ""}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Destination;
