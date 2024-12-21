import { Link } from "react-router-dom";
import LogoIcon from "./../../public/assets/shared/logo.svg?react";
import HamburgerIcon from "./../../public/assets/shared/hamburger.svg?react";
import { sideBarToggle } from "../utils/sideBarToggle";
import { appContext } from "../context/appContext";
import { useContext } from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { dispatch } = useContext(appContext);
  return (
    <nav>
      <Link className="clickable" to="/">
        <LogoIcon />
      </Link>
      <section>
        <div
          className="hamburger clickable"
          onClick={() => sideBarToggle(dispatch)}
        >
          <HamburgerIcon />
        </div>
        <div className="nav_itm2">
          <div className="line nav-line"></div>
          <NavLinks />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
