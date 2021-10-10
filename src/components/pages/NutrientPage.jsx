import { useState } from "react";
import { round } from "lodash";
import { Grid } from "@mui/material";

import Header from "../atoms/Header/Header";
import LeftColumn from "../organisms/LeftColumn";
import RightColumn from "../organisms/RightColumn/RightColumn";

function NutrientPage() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=`;

  const [foods, setFoods] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [renderList, setRenderList] = useState(false);
  const [nutrients, setNutrients] = useState([
    { nutrientId: 1003, name: "Protein", value: 0, unit: "g", dri: 150 },
    { nutrientId: 2000, name: "Sugar", value: 0, unit: "g", dri: 25 },
    { nutrientId: 1253, name: "Cholesterol", value: 0, unit: "mg", dri: 300 },
    { nutrientId: 1079, name: "Fiber", value: 0, unit: "g", dri: 30 },
    { nutrientId: 1258, name: "Saturated Fat", value: 0, unit: "g", dri: 20 },
    {
      nutrientId: 1292,
      name: "Monounsaturated Fat",
      value: 0,
      unit: "g",
      dri: 30,
    },
    {
      nutrientId: 1293,
      name: "Polyunsaturated Fat",
      value: 0,
      unit: "g",
      dri: 30,
    },
    { nutrientId: 1093, name: "Sodium", value: 0, unit: "mg", dri: 1500 },
    { nutrientId: 1092, name: "Potassium", value: 0, unit: "mg", dri: 4500 },
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
    setRenderList(false);
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

  const handleDelete = async (input) => {
    setSelectedFoods(selectedFoods.filter((item) => item !== input));
    const selectedNutrients = input.foodNutrients;
    let index = 0;
    selectedNutrients.forEach((nutrient) => {
      index = nutrients.findIndex(
        (obj) => obj.nutrientId === nutrient.nutrientId
      );
      if (index >= 0) {
        let updatedNutrients = [...nutrients];
        updatedNutrients[index].value -= nutrient.value;
        updatedNutrients[index].value = round(updatedNutrients[index].value, 2);
        setNutrients(updatedNutrients);
      }
    });
  };

  return (
    <Grid container spacing={2} p={2}>
      <Grid item xs={12}>
        <Header variant="h4" text="Nutrient Tracker" />
      </Grid>
      <Grid item xs={5}>
        <LeftColumn
          foods={foods}
          handleSearch={handleSearch}
          handleSelect={handleSelect}
          renderList={renderList}
          selectedFoods={selectedFoods}
          handleDelete={handleDelete}
        />
      </Grid>
      <Grid item xs={7}>
        <RightColumn nutrients={nutrients} />
      </Grid>
    </Grid>
  );
}

export default NutrientPage;
