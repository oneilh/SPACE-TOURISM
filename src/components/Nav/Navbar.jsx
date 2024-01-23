import { Link } from "react-router-dom";
import  LogoIcon from "../../assets/shared/logo.svg?react";
import  HamburgerIcon from "../../assets/shared/hamburger.svg?react";

const Navbar = () => {
  return (
    <nav>
      <Link className="clickable" to='/'>
        <LogoIcon />
      </Link>
      <div style={{ alignSelf: "center" }} className="clickable">
        <HamburgerIcon />
      </div>
    </nav>
  );
};

export default Navbar;
