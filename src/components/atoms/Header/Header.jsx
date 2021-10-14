import React from "react";
import { Typography } from "@mui/material";

const Header = (props) => (
  <Typography variant={props.variant}>{props.text}</Typography>
);

export default Header;
