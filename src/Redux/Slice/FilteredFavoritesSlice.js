import { createSlice } from "@reduxjs/toolkit";

export const filteredFavoritesSlice = createSlice({
  name: "filteredFavorites",
  initialState: {
    value: [],
  },
  reducers: {
    setFilteredFavorites: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFilteredFavorites } = filteredFavoritesSlice.actions;
export default filteredFavoritesSlice.reducer;
