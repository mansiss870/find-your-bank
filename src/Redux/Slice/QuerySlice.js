import { createSlice } from "@reduxjs/toolkit";

export const querySlice = createSlice({
  name: "querySlice",
  initialState: {
    value: "",
  },
  reducers: {
    setQuery: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setQuery } = querySlice.actions;
export default querySlice.reducer;
