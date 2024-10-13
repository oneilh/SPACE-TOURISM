import { appContext } from "../context/appContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import Styles from "./navbar.module.css";
import { sideBarToggle } from "../utils/sideBarToggle";

const NavLinks = () => {
  const { dispatch } = useContext(appContext);
  const {nav_links} = Styles;

  return (
    <section className={`${nav_links}`}>
      <NavLink to="/" onClick={() => sideBarToggle(dispatch)}>
        <span>00</span> HOME
      </NavLink>

      <NavLink to="destination" onClick={() => sideBarToggle(dispatch)}>
        <span>01</span> DESTINATION
      </NavLink>

      <NavLink to="crew" onClick={() => sideBarToggle(dispatch)}>
        <span>02</span> CREW
      </NavLink>

      <NavLink to="technology" onClick={() => sideBarToggle(dispatch)}>
        <span>03</span> TECHNOLOGY
      </NavLink>
    </section>
  );
};

export default NavLinks;
