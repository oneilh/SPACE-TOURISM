import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav/Navbar";
import { appContext } from "../context/appContext";

const Layout = () => {
  const { appState } = useContext(appContext);
  const STYLES = {
    backgroundImage: `url(
          ${appState.bgImage}
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
