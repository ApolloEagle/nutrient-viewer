import React from 'react';
import { Typography } from '@mui/material';

const Header = ({ variant, text }) => (
  <Typography variant={variant}>{text}</Typography>
);

export default Header;
