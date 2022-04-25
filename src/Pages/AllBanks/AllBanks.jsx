import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../Redux/Slice/LoadingSlice";
import { setCity } from "../../Redux/Slice/CitySlice";
import { setFilteredBanks } from "../../Redux/Slice/FilteredBanksSlice";
import { setFavorites } from "../../Redux/Slice/FavoritesSlice";
import { useState } from "react";
import Banks from "../../Components/Banks";
import { Button } from "@mui/material";
import { setFilteredFavorites } from "../../Redux/Slice/FilteredFavoritesSlice";
import { useNavigate } from "react-router-dom";


const AllBanks = () => {
  const navigate = useNavigate();
  const banks = useSelector((state) => state.banks.value);
  const filteredBanks = useSelector((state) => state.filteredBanks.value);
  const favorites = useSelector((state) => state.favorites.value);
  const city = useSelector((state) => state.city.value);
  const loading = useSelector((state) => state.loading.value);
  const dispatch = useDispatch();

  const [category, setCategory] = useState("ifsc");
  const [searchText, setSearchText] = useState("");

  const handleOnCellClick = (params) => {
    if (params.field === "Favorites") {
      dispatch(setFavorites([...favorites, params.row]));
      dispatch(setFilteredFavorites([...favorites, params.row]));
      return;
    }
    navigate('/bank-details/'+params.row.ifsc, {state: params.row})
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
      dispatch(setFilteredBanks(banks))
      return; 
    } 
    setSearchText(event.target.value);
    const fBanks = banks.filter((bank) => {
      return bank[category]
        .toString()
        .toLowerCase()
        .startsWith(searchText.toLowerCase());
    });
    dispatch(setFilteredBanks(fBanks));
  };

  const columns = [
    {
      field: "bank_name",
      headerName: "Bank",
      width: 400,
      renderCell: (params) => {
        return (
          <div
            style={{
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
            }}
          >
            {params.row.bank_name}
          </div>
        );
      },
    },
    { field: "ifsc", headerName: "IFSC", width: 150 },
    { field: "branch", headerName: "Branch", width: 150 },
    { field: "bank_id", headerName: "Bank ID", width: 100 },
    { field: "address", headerName: "Address", width: 350 },
    {
      field: "Favorites",
      width: 100,
      renderCell: (params) => {
        const result = favorites.filter(
          (favorite) => favorite.ifsc === params.row.ifsc
        );
        return result.length === 0 ? <Button>Add</Button> : <Button>Added</Button>;
      },
    },
  ];

  return (
    <>
      <Banks
        label="All Banks"
        city={city}
        rows={filteredBanks}
        columns={columns}
        loading={loading}
        searchText={searchText}
        category={category}
        handleOnCellClick={handleOnCellClick}
        handleOnCityChange={handleOnCityChange}
        handleOnCategoryChange={handleOnCategoryChange}
        handleOnSearch={handleOnSearch}
      ></Banks>
    </>
  );
};

export default AllBanks;
