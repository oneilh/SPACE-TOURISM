import { useContext, useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { appContext } from "../../context/appContext";

const Button = ({ alt_color, children }) => {

  return (
    <div className={`clickable btn ${alt_color ? "alt_btn" : "default"}`}>
      <IconContext.Provider value={{ className: "react-icons" }}>
        {children}
      </IconContext.Provider>
    </div>
  );
};

export default Button;
