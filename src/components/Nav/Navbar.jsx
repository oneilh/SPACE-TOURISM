import { Link } from "react-router-dom";
import LogoIcon from "../../assets/shared/logo.svg?react";
import HamburgerIcon from "../../assets/shared/hamburger.svg?react";
import { closeNavBar } from "../../utils/closeNavBtn";
import { appContext } from "../../context/appContext";
import { useContext } from "react";

const Navbar = () => {
  const { dispatch } = useContext(appContext);
  return (
    <nav>
      <Link className="clickable" to="/">
        <LogoIcon />
      </Link>
      <div
        style={{ alignSelf: "center" }}
        className="clickable"
        onClick={() => closeNavBar(dispatch)}
      >
        <HamburgerIcon />
      </div>
    </nav>
  );
};

export default Navbar;
