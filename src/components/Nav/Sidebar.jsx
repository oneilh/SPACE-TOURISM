import { IoClose } from "react-icons/io5";
import Styles from "./navbar.module.css";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { side_bar, close_container, close, nav_links, pg_no, link } = Styles;
  return (
    <div className={side_bar}>
      <section className={close_container}>
        <IconContext.Provider
          value={{
            className: `react-icons clickable ${close}`,
          }}
        >
          <IoClose />
        </IconContext.Provider>
      </section>
      <section className={nav_links}>
        <Link to='/' className={link}>
          <h4 className={link}>
            <span className={pg_no}>00</span> HOME
          </h4>
        </Link>
        <Link to='/destination'className={link}>
          <h4>
            <span className={pg_no}>01</span> DESTINATION
          </h4>
        </Link>
        <Link to='/crew'className={link}>
          <h4>
            <span className={pg_no}>02</span> CREW
          </h4>
        </Link>
        <Link to='/technology' className={link}>
          <h4>
            <span className={pg_no}>03</span> TECHNOLOGY
          </h4>
        </Link>
      </section>
    </div>
  );
};

export default Sidebar;
