import { TextField, InputAdornment } from "@mui/material";

function SearchInput(props) {
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
}

export default SearchInput;
