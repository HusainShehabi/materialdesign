import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React from "react";

type Props = {};

function HeaderIcons({}: Props) {
  return (
    <div
      style={{
        width: "10%",
        display: "flex",
      }}
    >
      <div style={{ width: "100%" }}>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </div>
      <div style={{ width: "100%" }}>
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </div>
      <div style={{ width: "100%" }}>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default HeaderIcons;
