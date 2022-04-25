import { useDispatch, useSelector } from "react-redux";
import { setCity } from "../../Redux/Slice/CitySlice";
import { setLoading } from "../../Redux/Slice/LoadingSlice";
import { useState } from "react";
import { setBanks } from "react" 
import { setFavorites } from "../../Redux/Slice/FavoritesSlice";
import Banks from "../../Components/Banks"
import { setFilteredFavorites } from "../../Redux/Slice/FilteredFavoritesSlice";

const Favorites = () => {

  const favorites = useSelector((state) => state.favorites.value);
  const filteredFavorites = useSelector((state) => state.filteredFavorites.value)
  const city = useSelector((state) => state.city.value);
  const loading = useSelector((state) => state.loading.value);
  const dispatch = useDispatch();

  const [category, setCategory] = useState("ifsc");
  const [searchText, setSearchText] = useState("");

  const handleOnCellClick = (params) => {
    if (params.field === "Favorites") {
      dispatch(setFavorites([...favorites,params.row]));
    }
  };

  const handleOnCityChange = (event) => {
    dispatch(setLoading(true));
    dispatch(setCity(event.target.value));
    dispatch(setLoading(false));
  };

  const handleOnCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleOnSearch = (event) => {
    if (event.target.value.trim().length === 0) {
      dispatch(setFilteredFavorites(favorites))
      return; 
    } 
   setSearchText(event.target.value)
   const filteredFavorites = favorites.filter((bank) => bank[category].toString().toLowerCase().startsWith(searchText.toLowerCase()))
   dispatch(setFilteredFavorites(filteredFavorites));
  };

  const columns = [
    {
      field: "bank_name",
      headerName: "Bank",
      width: 400,
      renderCell: (params) => {
        return <div style={
          {
            whiteSpace: "pre-wrap",
            wordWrap: "break-word"
          }
        }>
          {params.row.bank_name}
        </div>
      }
    },
    { field: "ifsc", headerName: "IFSC", width: 150 },
    { field: "branch", headerName: "Branch", width: 150},
    { field: "bank_id", headerName: "Bank ID", width: 100 },
    { field: "address", headerName: "Address", width: 350 },
  ];

  return (
    <>
      <Banks 
        label = "Favorites"
        city = {city}
        rows = {filteredFavorites}
        columns = {columns}
        loading = {loading}
        searchText = {searchText}
        category = {category}
        handleOnCellClick = {handleOnCellClick}
        handleOnCityChange = {handleOnCityChange}
        handleOnCategoryChange = {handleOnCategoryChange}
        handleOnSearch = {handleOnSearch}
      ></Banks>
    </>
  );
};

export default Favorites;
