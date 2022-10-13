import { TextField } from "@mui/material";
import React from "react";

type Props = {};

function HeaderSearch({}: Props) {
  return (
    <div style={{ width: "15%" }}>
      {" "}
      <TextField
        id="outlined-basic"
        label="Search here"
        variant="outlined"
        size="small"
      />
    </div>
  );
}

export default HeaderSearch;
