import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [], // Initialize favorites array
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const mealId = action.payload;
      const index = state.favorites.indexOf(mealId);
      if (index !== -1) {
        state.favorites = state.favorites.filter(id => id !== mealId);
      } else {
        state.favorites.push(mealId);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
