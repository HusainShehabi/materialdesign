import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Header from "./Header/Header";
import BodyContent from "./BodyContent";

export default function ContentStack() {
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={1}>
          <div className="headerWrapper ">
            <React.Fragment>
              <Header />
            </React.Fragment>
          </div>
          <BodyContent />
          <div className="footer">
            <p>© 2022, by Husain as Practice</p>
          </div>
        </Stack>
      </Box>
    </div>
  );
}
