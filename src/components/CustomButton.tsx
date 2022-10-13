import { Button } from "@mui/material";
import React from "react";

function CustomButton(props: any) {
  return <Button variant="text">{props.text}</Button>;
}

export default CustomButton;
