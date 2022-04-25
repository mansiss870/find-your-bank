import { createSlice } from "@reduxjs/toolkit";

export const filteredBanksSlice = createSlice({
  name: "filteredBanks",
  initialState: {
    value: [],
  },
  reducers: {
    setFilteredBanks: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFilteredBanks } = filteredBanksSlice.actions;
export default filteredBanksSlice.reducer;
