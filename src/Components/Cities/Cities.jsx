import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CommitOutlined } from "@mui/icons-material";

export const Cities = ({ cities, currentCity, handleOnCityChange }) => {
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="city">City</InputLabel>
        <Select labelid="city" label = "city" value={currentCity} onChange={handleOnCityChange}>
          {cities.map((city) => (
            <MenuItem key={city.toUpperCase()} value={city.toUpperCase()}>{city}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
