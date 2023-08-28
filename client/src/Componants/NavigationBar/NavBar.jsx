import React from "react";
import Style from "./navBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={Style.navBar}>
      <ul className={Style.ul}>
        <li className={Style.li}>
          <a className={Style.listHeading} href="#">
            CRUD APP
          </a>
        </li>
        <li className={Style.li}>
          <Link className={Style.a} to="/alluser">
            All Users
          </Link>
        </li>
        <li className={Style.li}>
          <Link className={Style.a} to="/">
            Add Users
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
