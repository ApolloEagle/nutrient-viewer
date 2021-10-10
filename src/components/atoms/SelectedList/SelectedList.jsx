import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  IconButton,
} from "@mui/material";
import { TransitionGroup } from "react-transition-group";

function SelectedList({ selectedFoods, handleDelete, deleteIcon }) {
  return (
    <List>
      <TransitionGroup>
        {!!selectedFoods &&
          selectedFoods.map((selectedFood, index) => {
            return (
              <Collapse key={index}>
                <ListItem
                  sx={{
                    bgcolor: "primary.light",
                    marginBottom: 1,
                    borderRadius: 2,
                    color: "white",
                  }}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      onClick={() => handleDelete(selectedFood)}
                    >
                      {deleteIcon}
                    </IconButton>
                  }
                >
                  <ListItemText>{selectedFood.description}</ListItemText>
                </ListItem>
              </Collapse>
            );
          })}
      </TransitionGroup>
    </List>
  );
}

export default SelectedList;
