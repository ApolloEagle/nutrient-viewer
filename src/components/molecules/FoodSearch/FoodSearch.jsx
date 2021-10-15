import { Box } from '@mui/material';
import SearchInput from '../../atoms/SearchInput/SearchInput';
import SearchIcon from '../../atoms/SearchIcon/SearchIcon';
import SearchList from '../../atoms/SearchList';

function Search({ list, handleSearch, handleSelect, renderList }) {
  return (
    <Box>
      <SearchInput
        variant="standard"
        size="small"
        fullWidth
        placeholder="Search Eggs, Bread, etc."
        onChange={(e) => handleSearch(e.target.value)}
        icon={<SearchIcon />}
      />
      {!!renderList && (
        <SearchList dense={true} list={list} handleSelect={handleSelect} />
      )}
    </Box>
  );
}

export default Search;
