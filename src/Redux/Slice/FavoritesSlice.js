import { createSlice } from '@reduxjs/toolkit'

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
      value: []
  },
  reducers: {
      setFavorites: (state, action) => {
          state.value = action.payload
      }
  },
})

export const { setFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer