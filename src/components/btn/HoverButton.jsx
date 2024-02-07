import { useContext } from "react";
import { appContext } from "../../context/appContext";
import Button from "../../components/btn/Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const HoverButton = () => {
  const { appState } = useContext(appContext);
  return (
    <>
      {appState.hoverStatus && (
        <section className="img_btn">
          <Button>
            <FaArrowLeft />
          </Button>

          <Button>
            <FaArrowRight />
          </Button>
        </section>
      )}
      '
    </>
  );
};

export default HoverButton;
