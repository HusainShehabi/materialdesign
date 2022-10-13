import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Header from "./Header";
import BodyContent from "./BodyContent";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
