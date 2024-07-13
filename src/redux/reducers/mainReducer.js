import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [], // Initialize favorites array
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const meal = action.payload;
      const index = state.favorites.findIndex(item => item.idMeal === meal.idMeal);

      if (index !== -1) {
        state.favorites = state.favorites.filter(item => item.idMeal !== meal.idMeal);
      } else {
        state.favorites.push(meal);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
