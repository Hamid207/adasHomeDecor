import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ShoppingCartService } from "../../services/shoppingCart.service";

export const fetchShoppingCart = createAsyncThunk(
  "getShoppingCarts",
  async () => {
    const data = await ShoppingCartService.getShoppingCarts();
    return data;
  }
);

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShoppingCart.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default shoppingCartSlice;
