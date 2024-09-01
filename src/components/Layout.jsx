import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav/Navbar";
import { appContext } from "../context/appContext";
import Sidebar from "./Nav/Sidebar";

const Layout = () => {
  const { appState } = useContext(appContext);

  return (
    <div className={`bg-image bg-${appState.bgImage}`}>
      <div className="container">
        <Navbar />
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
