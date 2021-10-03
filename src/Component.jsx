import { useState } from 'react';
import {
  TextField,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

function Component() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=`;

  const [foods, setFoods] = useState([]);
  const [nutrients, setNutrients] = useState([
    { nutrientId: 1003, name: 'Protein', value: 0, unit: 'g' },
    { nutrientId: 2000, name: 'Sugar', value: 0, unit: 'g' },
  ]);

  const handleSearch = async (input) => {
    const url = `${baseUrl}${input}`;
    const res = await fetch(url);
    const body = await res.json();
    setFoods(body.foods);
  };

  const handleSelect = async (input) => {
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
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3">Nutrient Tracker</Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField onChange={(e) => handleSearch(e.target.value)} />
        <List>
          {foods.map((food, index) => {
            return (
              <ListItem key={index} onClick={() => handleSelect(food)}>
                <ListItemText primary={food.description} />
              </ListItem>
            );
          })}
        </List>
      </Grid>
      <Grid item xs={6}>
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

export default Component;
