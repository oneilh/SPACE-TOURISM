import { IconContext } from "react-icons";

const Button = ({ alt_color, children }) => {
  return (
    <div className={`btn clickable ${alt_color ? "alt_btn" : "default"}`}>
      <IconContext.Provider value={{ className: "react-icons" }}>
        {children}
      </IconContext.Provider>
    </div>
  );
};

export default Button;
