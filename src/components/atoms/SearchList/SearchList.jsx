import React from 'react';
import { List, ListItem, ListItemText, ListItemButton } from '@mui/material';

const SearchList = ({ list, dense, handleSelect }) => (
  <List
    sx={{
      overflow: 'auto',
      maxHeight: 100,
      zIndex: 1,
      position: 'absolute',
      backgroundColor: 'white',
      opacity: 0.95,
      width: '40.5%',
    }}
  >
    {list?.map((item, index) => {
      return (
        <ListItemButton dense={dense} key={index}>
          <ListItem onClick={() => handleSelect(item)}>
            <ListItemText primary={item.description} />
          </ListItem>
        </ListItemButton>
      );
    })}
  </List>
);

export default SearchList;
