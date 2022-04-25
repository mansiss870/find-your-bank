import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Categories = ({
  categories,
  currentCategory,
  handleOnCategoryChange,
}) => {
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="categories"> Categories </InputLabel>
        <Select
          labelid="categories"
          label = "categories"
          value={currentCategory}
          onChange={handleOnCategoryChange}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category.toLowerCase()}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default Categories;
