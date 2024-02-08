import { useContext } from "react";
import { appContext } from "../context/appContext";
import HoverButton from "./btn/HoverButton";

const Img = ({png}) => {
  const { dispatch } = useContext(appContext);
  return (
    <section
      className="img_container"
      onMouseOver={() => dispatch({ type: "hover", value: true })}
      onMouseOut={() => dispatch({ type: "hover", value: false })}
    >
      <HoverButton />
      <img src={png ? png : ""} alt="PNG image" />
    </section>
  );
};

export default Img;
