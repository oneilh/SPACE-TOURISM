import { HamburgerIcon, LogoIcon } from "../../assets/shared/Icons";

const Navbar = () => {
  return (
    <nav>
      <div className="clickable">
        <LogoIcon />
      </div>
      <div style={{ alignSelf: "center" }} className="clickable">
        <HamburgerIcon />
      </div>
    </nav>
  );
};

export default Navbar;
