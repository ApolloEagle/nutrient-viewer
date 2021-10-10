import { Box, Grid } from "@mui/material";
import { divide } from "lodash";
import { ArrowDropDown } from "@mui/icons-material";

function NutrientBar({ nutrient }) {
  return (
    <Grid container direction="column" sx={{ width: "75%" }}>
      <Grid item>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexFlow: "column",
            transition: "margin-left 1s",
            marginLeft:
              nutrient.value < nutrient.dri * 2
                ? `${divide(nutrient.value, nutrient.dri * 2) * 100 - 1}%`
                : "97%",
          }}
        >
          <Box sx={{ paddingLeft: nutrient.value === 0 ? 0.75 : 0 }}>
            {nutrient.value}
          </Box>
          <ArrowDropDown />
        </Box>
      </Grid>
      <Grid item>
        <Box
          sx={{
            height: 4,
            bgcolor: "primary.light",
            borderRadius: 5,
          }}
        />
      </Grid>
    </Grid>
  );
}

export default NutrientBar;
