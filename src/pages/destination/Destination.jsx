import { useContext, useEffect, useState } from "react";
import { appContext } from "../../context/appContext";
import Styles from "./destination.module.css";
import backgroundImage from "../../assets/destination/background-destination-mobile.jpg";
import { destinations } from "../../data/db.json";
import Title from "../../components/Title";
import Img from "../../components/Img";

const Destination = () => {
  const { dispatch } = useContext(appContext);

  const [planetName, setPlanetName] = useState(destinations[0].name);
  const [activePlanet, setActivePlanet] = useState([]);

  useEffect(() => {
    dispatch({ type: "bgUpdate", value: backgroundImage });
  }, [backgroundImage]);

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

  // !come back later
  /* const { description, distance, name, travel, images } = {
     ...activePlanet[0]
   };*/
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
          <p>{description ? description.toUpperCase() : ""}</p>
        </section>

        <section className={`line ${Styles.extra}`}>
          <div className="flex-vertical">
            <h5>AVG. DISTANCE</h5>
            <h3>{distance ? distance.toUpperCase() : ""}</h3>
          </div>

          <div className="flex-vertical">
            <h5>EST. TRAVEL TIME</h5>
            <h3>{travel ? travel.toUpperCase() : ""}</h3>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Destination;
