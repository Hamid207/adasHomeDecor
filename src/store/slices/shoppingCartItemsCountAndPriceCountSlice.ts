import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

// const [count, setCount] = useState<number>(0);

const shoppingCartItemsCountAndPriceCountSlice = createSlice({
  name: "itemAndPriceCount",
  initialState: { itemCount: 0, totalPrice: 0 },
  reducers: {
    itemCountPlus: (state, action) => {
      state.itemCount += action.payload;
    },

    itemCountMinus: (state, action) => {
      state.itemCount -= action.payload;
    },

    itemCountEmpty: (state) => {
      state.itemCount = 0;
    },

    totalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});

export const { itemCountPlus, itemCountMinus, itemCountEmpty, totalPrice } =
  shoppingCartItemsCountAndPriceCountSlice.actions;
export default shoppingCartItemsCountAndPriceCountSlice;
