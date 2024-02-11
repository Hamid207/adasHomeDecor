import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductsService } from "../../services/products.service";

export const fetchProducts = createAsyncThunk("getProducts", async () => {
  const data = await ProductsService.getProducts();
  return data;
});

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default productsSlice;
