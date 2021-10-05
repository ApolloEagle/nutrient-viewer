import { useState } from "react";
import round from "lodash/round";
import {
  TextField,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";

function Content() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=`;

  const [foods, setFoods] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [renderList, setRenderList] = useState(false);
  const [nutrients, setNutrients] = useState([
    { nutrientId: 1003, name: "Protein", value: 0, unit: "g" },
    { nutrientId: 2000, name: "Sugar", value: 0, unit: "g" },
    { nutrientId: 1253, name: "Cholesterol", value: 0, unit: "mg" },
    { nutrientId: 1079, name: "Fiber", value: 0, unit: "g" },
    { nutrientId: 1258, name: "Saturated Fat", value: 0, unit: "g" },
    { nutrientId: 1292, name: "Monounsaturated Fat", value: 0, unit: "g" },
    { nutrientId: 1293, name: "Polyunsaturated Fat", value: 0, unit: "g" },
    { nutrientId: 1093, name: "Sodium", value: 0, unit: "mg" },
    { nutrientId: 1092, name: "Potassium", value: 0, unit: "mg" },
  ]);

  console.log(selectedFoods);

  const handleSearch = async (input) => {
    setRenderList(false);
    if (!!input) {
      setRenderList(true);
      const url = `${baseUrl}${input}`;
      const res = await fetch(url);
      const body = await res.json();

      setFoods(body.foods);
    } else {
      setRenderList(false);
    }
  };

  const handleSelect = async (input) => {
    setSelectedFoods([...selectedFoods, input]);
    const selectedNutrients = input.foodNutrients;
    let index = 0;
    selectedNutrients.forEach((nutrient) => {
      index = nutrients.findIndex(
        (obj) => obj.nutrientId === nutrient.nutrientId
      );
      if (index >= 0) {
        let updatedNutrients = [...nutrients];
        updatedNutrients[index].value += nutrient.value;
        updatedNutrients[index].value = round(updatedNutrients[index].value, 2);
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
        <Box>
          <TextField
            variant="standard"
            onChange={(e) => handleSearch(e.target.value)}
            size="small"
            fullWidth
            placeholder="Search Eggs, Bread, etc."
          />
          {renderList && (
            <List
              sx={{
                overflow: "auto",
                maxHeight: 100,
              }}
            >
              {foods?.map((food, index) => {
                return (
                  <ListItemButton dense={true}>
                    <ListItem key={index} onClick={() => handleSelect(food)}>
                      <ListItemText primary={food.description} />
                    </ListItem>
                  </ListItemButton>
                );
              })}
            </List>
          )}
        </Box>
        <List>
          {!!selectedFoods &&
            selectedFoods.map((selectedFood) => {
              return (
                <ListItem
                  sx={{
                    backgroundColor: "magenta",
                    marginBottom: 1,
                    borderRadius: 2
                  }}
                >
                  {selectedFood.description}
                </ListItem>
              );
            })}
        </List>
      </Grid>
      <Grid item xs={7}>
        <List>
          {!!nutrients &&
            nutrients.map((nutrient, index) => {
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
