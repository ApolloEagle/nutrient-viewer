import React from "react";
import { TextField, InputAdornment } from "@mui/material";

const SearchInput = (props) => {
  return (
    <TextField
      {...props}
      InputProps={{
        startAdornment: (
          <InputAdornment position={props.position}>
            {props.icon}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
