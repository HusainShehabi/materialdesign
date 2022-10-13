import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";

export default function TabSettings() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div style={{ alignContent: "center" }}>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab
            value="one"
            icon={<HomeIcon />}
            iconPosition="start"
            label="App"
          />
          <Tab
            value="two"
            icon={<EmailIcon />}
            iconPosition="start"
            label="Message"
          />
          <Tab
            value="three"
            icon={<SettingsIcon />}
            iconPosition="start"
            label="Settings"
          />
        </Tabs>
      </Box>
    </div>
  );
}
