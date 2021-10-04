import { useState } from "react";
import round from 'lodash/round';
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
  ]);

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
        updatedNutrients[index].value = round(updatedNutrients[index].value, 2)
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
          {!!selectedFoods &&
            selectedFoods.map((selectedFood) => {
              return (
                <ListItem
                  sx={{
                    backgroundColor: "magenta",
                  }}
                >
                  {selectedFood.description}
                </ListItem>
              );
            })}
        </List>
        <List>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "pink",
            }}
          >
            <Box>
              <TextField
                variant="standard"
                onChange={(e) => handleSearch(e.target.value)}
                size="small"
                fullWidth
                placeholder="Search Eggs, Bread, etc."
                InputProps={{
                  disableUnderline: true,
                }}
              />
              {renderList && (
                <List
                  sx={{
                    position: "relative",
                    overflow: "auto",
                    maxHeight: 100,
                  }}
                >
                  {foods?.map((food, index) => {
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
          {!!nutrients && nutrients.map((nutrient, index) => {
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
