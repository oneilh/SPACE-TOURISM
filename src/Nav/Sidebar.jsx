import { useContext } from "react";
import { appContext } from "../context/appContext";

import NavLinks from "./NavLinks";
import Styles from "./navbar.module.css";
import { sideBarToggle } from "../utils/sideBarToggle";

import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons";


const Sidebar = () => {
  const { appState, dispatch } = useContext(appContext);
  const { navBtn } = appState;
  const { side_bar, close_container, close, shwSide } = Styles;

  return (
    <div className={`${side_bar} ${navBtn ? shwSide : ""}`}>
      <section
        className={close_container}
        onClick={() => sideBarToggle(dispatch)}
      >
        <IconContext.Provider
          value={{
            className: `clickable ${close}`,
          }}
        >
          <IoClose />
        </IconContext.Provider>
      </section>
      <NavLinks />
    </div>
  );
};

export default Sidebar;
