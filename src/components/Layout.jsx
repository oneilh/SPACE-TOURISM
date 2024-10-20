import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Nav/Navbar";
import { appContext } from "../context/appContext";
import Sidebar from "../Nav/Sidebar";

const Layout = () => {
  const { appState } = useContext(appContext);
  const {bgImage} = appState;
 

  return (
    <div className={`bg-image bg-${appState.bgImage}`}>
      <Navbar />
      <div className={`container ${bgImage == 'technology' ? 'container_technology' : ''}`}>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
