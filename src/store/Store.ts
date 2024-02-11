import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice, { fetchCategories } from "./slices/categoriesSlice";
import productsSlice, { fetchProducts } from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
    productts: productsSlice.reducer,
  },
});

store.dispatch(fetchCategories());
store.dispatch(fetchProducts());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
