import "./App.css";
import { Divider, Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBanks } from "./Redux/Slice/BanksSlice";
import { setError } from "./Redux/Slice/ErrorSlice";
import { setLoading } from "./Redux/Slice/LoadingSlice";
import AppRoutes from "./App.routes";
import axios from "axios";
import { URL } from "./Utils";
import { setFilteredBanks } from "./Redux/Slice/FilteredBanksSlice";

const App = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.city.value);

  useEffect(() => {
    async function fetchData() {
      dispatch(setLoading(true));
      dispatch(setError(false));
      try {
        let response = await axios.get(URL + city.toUpperCase());
        if (response.data) {
          dispatch(setBanks(response.data));
          dispatch(setFilteredBanks(response.data));
        } else {
          dispatch(setError(true));
        }
      } catch (err) {
        dispatch(setError(true));
      }
      dispatch(setLoading(false));
    }
    fetchData();
  }, [city]);

  return (
    <div style={{
      height: "100%",
      width: "100%",
    }}>
      <Divider style={{ marginTop: "3%" }}></Divider>
      <Grid container spacing={1} alignItems="flex-start" style={{
        marginTop: "1%"
      }}>
        <AppRoutes />
      </Grid>
    </div>
  );
};

export default App;
