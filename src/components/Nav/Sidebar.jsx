import { IoClose } from "react-icons/io5";
import Styles from "./navbar.module.css";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { appContext } from "../../context/appContext";
import { closeNavBar } from "../../utils/closeNavBtn";

const Sidebar = () => {
  const { appState, dispatch } = useContext(appContext);
  const { navBtn } = appState;
  const { side_bar, close_container, close, nav_links, shwSide } = Styles;

  return (
    <div className={`${side_bar} ${navBtn ? shwSide : ""}`}>
      {console.log("Nav Btn => ", navBtn)}
      <section
        className={close_container}
        onClick={() => closeNavBar(dispatch)}
      >
        <IconContext.Provider
          value={{
            className: `react-icons clickable ${close}`,
          }}
        >
          <IoClose />
        </IconContext.Provider>
      </section>

      <section className={nav_links}>
        <NavLink to="/" onClick={() => closeNavBar(dispatch)}>
          <span>00</span> HOME
        </NavLink>

        <NavLink to="destination" onClick={() => closeNavBar(dispatch)}>
          <span>01</span> DESTINATION
        </NavLink>

        <NavLink to="crew" onClick={() => closeNavBar(dispatch)}>
          <span>02</span> CREW
        </NavLink>

        <NavLink to="technology" onClick={() => closeNavBar(dispatch)}>
          <span>03</span> TECHNOLOGY
        </NavLink>
      </section>
    </div>
  );
};

export default Sidebar;
