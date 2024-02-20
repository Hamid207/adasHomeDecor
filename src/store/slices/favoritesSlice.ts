import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FavoritesService } from "../../services/favorites.service";

export const fetchFavorites = createAsyncThunk("getFavorites", async () => {
  const data = await FavoritesService.getFavorites();
  return data;
});

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default favoritesSlice;
