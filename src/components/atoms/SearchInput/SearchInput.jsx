import React from 'react';
import { TextField, InputAdornment } from '@mui/material';

const SearchInput = ({ icon, ...otherProps }) => (
  <TextField
    {...otherProps}
    InputProps={{
      startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
    }}
  />
);

export default SearchInput;
