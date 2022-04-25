import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { TextField } from "@mui/material";

const Search = ({handleOnSearch, searchText}) => {
  return (
    <>
      <TextField
        label="Search"
        variant="outlined"
        defaultValue = {searchText}
        onKeyUp= {handleOnSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      ></TextField>
    </>
  );
};

export default Search;
