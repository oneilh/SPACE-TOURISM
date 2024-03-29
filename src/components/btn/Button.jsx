import { IconContext } from "react-icons";


const Button = ({ alt_color, children }) => {

  return (
    <div className={`clickable btn ${alt_color ? "alt_btn" : "default_btn"}`}>
      <IconContext.Provider value={{ className: "react-icons" }}>
        {children}
      </IconContext.Provider>
    </div>
  );
};

export default Button;
