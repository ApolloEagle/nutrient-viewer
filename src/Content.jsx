import { useState } from 'react';
import {
  TextField,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  InputAdornment,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';
import Search from '@mui/icons-material/Search';

function Content() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=`;

  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState('');
  const [nutrients, setNutrients] = useState([
    { nutrientId: 1003, name: 'Protein', value: 0, unit: 'g' },
    { nutrientId: 2000, name: 'Sugar', value: 0, unit: 'g' },
  ]);

  const handleSearch = async (input) => {
    setSelectedFood('');
    const url = `${baseUrl}${input}`;
    const res = await fetch(url);
    const body = await res.json();
    setFoods(body.foods);
  };

  const handleSelect = async (input) => {
    setSelectedFood(input.description);
    const selectedNutrients = input.foodNutrients;
    let index = 0;
    selectedNutrients.forEach((nutrient) => {
      index = nutrients.findIndex(
        (obj) => obj.nutrientId === nutrient.nutrientId
      );
      if (index >= 0) {
        let updatedNutrients = [...nutrients];
        updatedNutrients[index].value = nutrient.value;
        setNutrients(updatedNutrients);
      }
    });
  };

  return (
    <Grid container spacing={2} p={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Nutrient Tracker</Typography>
      </Grid>
      <Grid item xs={5}>
        <List>
          <ListItem
            sx={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'pink',
            }}
          >
            <Box>
              <TextField
                variant="standard"
                onChange={(e) => handleSearch(e.target.value)}
                size="small"
                fullWidth
                placeholder="Search Eggs, Broccoli, etc."
                InputProps={{
                  disableUnderline: true,
                  // startAdornment: (
                  //   <InputAdornment position="start">
                  //     <Search fontSize="small" />
                  //   </InputAdornment>
                  // ),
                }}
              />
              {!selectedFood && (
                <List
                  sx={{
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 100,
                  }}
                >
                  {foods.map((food, index) => {
                    return (
                      <ListItemButton dense={true}>
                        <ListItem
                          key={index}
                          onClick={() => handleSelect(food)}
                        >
                          <ListItemText primary={food.description} />
                        </ListItem>
                      </ListItemButton>
                    );
                  })}
                </List>
              )}
            </Box>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={7}>
        <List>
          {nutrients.map((nutrient, index) => {
            return (
              <ListItem key={index}>
                <ListItemText
                  primary={`${nutrient.name}: ${nutrient.value}${nutrient.unit}`}
                />
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
}

export default Content;
