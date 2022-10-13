import { Button, Stack } from "@mui/material";
import React from "react";
import CustomButton from "./CustomButton";

type Props = {};

function SideNavCard({}: Props) {
  return (
    <div className="sideNavCard">
      <div style={{ padding: "15px" }}>
        <div
          style={{
            height: "60px",
            fontWeight: "700",
            textAlign: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          Material Dashboard
        </div>

        <br />
        <br />
        <Stack spacing={2}>
          <CustomButton text="Dashboard" />
          <CustomButton text="Tables" />
          <CustomButton text="Billing" />
          <CustomButton text="RTL" />
          <CustomButton text="Notifications" />
          <CustomButton text="Profile" />
          <CustomButton text="Sign In" />
          <CustomButton text="Sign Up" />
        </Stack>
      </div>
      <div style={{ padding: "15px", marginTop: "330px" }}>
        <Stack spacing={2}>
          <Button
            variant="contained"
            sx={{
              background:
                "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
            }}
          >
            Upgrade to Pro
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default SideNavCard;
