import { useContext, useEffect, useState } from "react";
import { BackgroundContext } from "../../context/MyContext";
import backgroundImage from '../../assets/crew/background-crew-mobile.jpg'
import Styles from './crew.module.css'
import Title from "../../components/Title";


const Crew = () => {
    
  const { setUrl } = useContext(BackgroundContext);
  useEffect(() => {
    setUrl(backgroundImage);
  }, []);

  return <div className={Styles.crew}>
    <Title no='02' title='meet your crew'/>
    
  </div>;
};

export default Crew;
