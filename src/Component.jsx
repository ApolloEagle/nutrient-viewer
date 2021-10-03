import { useState } from 'react';
import {
  TextField,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

function Component() {
  const apiKey = `o6Xcd70ACWFPw6w7VPN2OFOUNvrgMP5grQbnVFY6`;
  const baseUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=`;

  const [foods, setFoods] = useState([]);
  const [nutrients, setNutrients] = useState([]);
  const [showNutrients, setShowNutrients] = useState(false);

  const handleFoodSearch = async (input) => {
    const url = `${baseUrl}${input}`;
    const res = await fetch(url);
    const body = await res.json();
    setShowNutrients(false);
    setFoods(body.foods);
  };

  const handleNutrientSearch = async (input) => {
    setShowNutrients(true);
    setNutrients(input.foodNutrients);
  };

  return (
    <Box>
      <Typography variant="h3">Nutrient Tracker</Typography>
      <TextField onChange={(e) => handleFoodSearch(e.target.value)} />
      {!showNutrients ? (
        <List>
          {foods.map((food) => {
            return (
              <ListItem onClick={() => handleNutrientSearch(food)}>
                <ListItemText primary={food.description} />
              </ListItem>
            );
          })}
        </List>
      ) : (
        <List>
          {nutrients.map((nutrient) => {
            return (
              <ListItem>
                <ListItemText primary={nutrient.nutrientName} />
              </ListItem>
            );
          })}
        </List>
      )}
    </Box>
  );
}

export default Component;
