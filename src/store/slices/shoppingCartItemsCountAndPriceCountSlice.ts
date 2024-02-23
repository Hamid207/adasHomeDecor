import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

// const [count, setCount] = useState<number>(0);

const shoppingCartItemsCountAndPriceCountSlice = createSlice({
  name: "itemAndPriceCount",
  initialState: { totalPrice: 0 },
  reducers: {
    totalPricePlus: (state, action) => {
      state.totalPrice += action.payload;
    },

    totalPriceMinus: (state, action) => {
      state.totalPrice -= action.payload;
    },

    totalPriceEmpty: (state) => {
      state.totalPrice = 0;
    },
  },
});

export const { totalPricePlus, totalPriceMinus, totalPriceEmpty } =
  shoppingCartItemsCountAndPriceCountSlice.actions;
export default shoppingCartItemsCountAndPriceCountSlice;
