import { createSlice } from "@reduxjs/toolkit";

export const citySlice = createSlice({
  name: "citySlice",
  initialState: {
    value: "MUMBAI",
  },
  reducers: {
    setCity: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCity } = citySlice.actions;
export default citySlice.reducer;
