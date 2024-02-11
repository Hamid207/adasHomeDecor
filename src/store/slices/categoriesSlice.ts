import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CategoriesService } from "../../services/categories.service";

export const fetchCategories = createAsyncThunk("getCategories", async () => {
  const data = await CategoriesService.getCategories();
  return data;
});

const categoriesSlice = createSlice({
  name: "categories",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default categoriesSlice;
