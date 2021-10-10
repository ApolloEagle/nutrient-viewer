import { Typography } from "@mui/material";

function Header(props) {
  return <Typography variant={props.variant}>{props.text}</Typography>;
}

export default Header;
