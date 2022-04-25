import { createSlice } from "@reduxjs/toolkit";

export const banksSlice = createSlice({
  name: "banks",
  initialState: {
    value: [],
  },
  reducers: {
    setBanks: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setBanks } = banksSlice.actions;
export default banksSlice.reducer;
