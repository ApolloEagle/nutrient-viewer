import FoodList from "../../molecules/FoodList";
import FoodSearch from "../../molecules/FoodSearch";

function LeftColumn({
  foods,
  handleSearch,
  handleSelect,
  handleDelete,
  renderList,
  selectedFoods,
}) {
  return (
    <>
      <FoodSearch
        list={foods}
        handleSearch={handleSearch}
        handleSelect={handleSelect}
        renderList={renderList}
      />
      <FoodList selectedFoods={selectedFoods} handleDelete={handleDelete} />
    </>
  );
}

export default LeftColumn;
