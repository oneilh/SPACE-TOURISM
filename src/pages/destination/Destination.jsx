import { useContext, useEffect, useState } from "react";
import { BackgroundContext } from "../../context/MyContext";
import Styles from "./destination.module.css";
import backgroundImage from "../../assets/destination/background-destination-mobile.jpg";
import { destinations } from "../../data/db.json";
import Title from "../../components/Title";

const Destination = () => {
  const { setUrl } = useContext(BackgroundContext);
  const [planetName, setPlanetName] = useState(destinations[0].name);
  const [activePlanet, setActivePlanet] = useState([]);

  // !come back later
  /* const { description, distance, name, travel, images } = {
     ...activePlanet[0]
   };*/
  const { description, distance, name, travel, images } =
    activePlanet.length > 0 ? activePlanet[0] : {};
  const { png } = images ? images : {};

  useEffect(() => {
    setUrl(backgroundImage);
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

  return (
    <div className="page_container">
      <Title no="01" title="pick your destination" />

      <div className={Styles.planet}>
        <img src={png ? png : ""} alt="PNG Image" />

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
          <div>
            <h4>AVG. DISTANCE</h4>
            <h3>{distance ? distance.toUpperCase() : ""}</h3>
          </div>

          <div>
            <h4>EST. TRAVEL TIME</h4>
            <h3>{travel ? travel.toUpperCase() : ""}</h3>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Destination;
