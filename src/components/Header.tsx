import { Icon, IconButton, TextField } from "@mui/material";
import React, { useState, Fragment } from "react";
import "../App.css";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import SettingsIcon from "@mui/icons-material/Settings";
// import NotificationsIcon from "@mui/icons-material/Notifications";

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
          <div style={{ background: "red", width: "100%" }}>Breadcrumb</div>
          <div style={{ width: "15%" }}>
            {" "}
            <TextField
              id="outlined-basic"
              label="Search here"
              variant="outlined"
              size="small"
            />
          </div>
          <div
            style={{
              width: "10%",
              display: "flex",
            }}
          >
            <div style={{ width: "100%" }}>
              <IconButton>{/* <AccountCircleIcon /> */}</IconButton>
            </div>
            <div style={{ width: "100%" }}>
              <IconButton>{/* <SettingsIcon /> */}</IconButton>
            </div>
            <div style={{ width: "100%" }}>
              <IconButton>{/* <NotificationsIcon /> */}</IconButton>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
