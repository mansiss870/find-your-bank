import { configureStore } from "@reduxjs/toolkit";
import banksReducer from "../Slice/BanksSlice";
import favoritesReducer from "../Slice/FavoritesSlice";
import loadingReducer from "../Slice/LoadingSlice"; 
import cityReducer from "../Slice/CitySlice"
import errorReducer from "../Slice/ErrorSlice"
import filteredBanksReducer from "../Slice/FilteredBanksSlice";
import queryReducer from "../Slice/QuerySlice"
import categoryReducer from "../Slice/CategorySlice";
import filteredFavoritesReducer from "../Slice/FilteredFavoritesSlice";

export const store = configureStore({
    reducer: {
        banks: banksReducer,
        favorites: favoritesReducer,
        city: cityReducer,
        loading: loadingReducer,
        error: errorReducer,
        query: queryReducer,
        filteredBanks: filteredBanksReducer,
        filteredFavorites: filteredFavoritesReducer,
        category: categoryReducer,
    },
})