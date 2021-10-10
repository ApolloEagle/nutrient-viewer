import SelectedList from "../../atoms/SelectedList";
import DeleteIcon from "../../atoms/DeleteIcon";

function FoodList({ selectedFoods, handleDelete }) {
  return (
    <SelectedList
      selectedFoods={selectedFoods}
      handleDelete={handleDelete}
      deleteIcon={<DeleteIcon />}
    />
  );
}

export default FoodList;
