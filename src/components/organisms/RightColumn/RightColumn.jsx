import { List, ListItem, ListItemText } from "@mui/material";
import NutrientBar from "../../molecules/NutrientBar";

function RightColumn({ nutrients }) {
  return (
    <List>
      {!!nutrients &&
        nutrients.map((nutrient, index) => {
          return (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <ListItemText primary={`${nutrient.name} (${nutrient.unit})`} />
              <NutrientBar nutrient={nutrient} />
            </ListItem>
          );
        })}
    </List>
  );
}

export default RightColumn;
