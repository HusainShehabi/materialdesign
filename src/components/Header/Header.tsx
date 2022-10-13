import React, { useState, Fragment } from "react";
import BreadCrumb from "./BreadCrumb";

import HeaderIcons from "./HeaderIcons";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <Fragment>
      <div className={colorChange ? "header colorChange" : "header"}>
        <div style={{ display: "flex", width: "100%", padding: "15px" }}>
          <BreadCrumb />
          <HeaderSearch />
          <HeaderIcons />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
