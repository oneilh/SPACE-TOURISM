import { useContext, useEffect, useState } from "react";
import { BackgroundContext } from "../../context/MyContext";
import Styles from "./destination.module.css";
import backgroundImage from "../../assets/destination/background-destination-mobile.jpg";
import { destinations } from "../../data/db.json";
import Article from "../../components/Article/Article";

const Destination = () => {
  const { setUrl } = useContext(BackgroundContext);
  useEffect(() => {
    setUrl(backgroundImage);
  }, [backgroundImage]);

  const [planetName, setplanetName] = useState("");

  return (
    <div className={Styles.destination}>
      <h4 className={Styles.page_title}>
        <span>01</span> PICK YOUR DESTINATION
      </h4>

      <div className={Styles.planet}>
        <img src="" alt="" />
        <section className={Styles.planet_selection}>
          {destinations.map((planet) => {
            const { name } = planet;
            return <h4 key={name}>{name.toUpperCase()}</h4>;
          })}
        </section>

        {destinations.map((planet_desc) => {
          const INFO = {
            title: planet_desc.name,
            description: planet_desc.description,
          };
          return (
            <section className={Styles.planet_desc}>
              <Article />

              <section className={Styles.extra}>
                <div>
                  <h4>AVG. DISTANCE</h4>
                  <h3>{planet_desc.distance}</h3>
                </div>

                <div>
                  <h4>EST. TRAVEL TIME</h4>
                </div>
              </section>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Destination;
