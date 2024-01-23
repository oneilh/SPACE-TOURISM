import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav/Navbar";
import { BackgroundContext } from "../context/MyContext";

const Layout = () => {
  const { url } = useContext(BackgroundContext);
  const STYLES = {
    backgroundImage: `url(
          ${url}
        )`,
  };

  return (
    <div className="bg-image" style={STYLES}>
      <div className="container">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
