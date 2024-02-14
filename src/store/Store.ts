import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice, { fetchCategories } from "./slices/categoriesSlice";
import productsSlice, { fetchProducts } from "./slices/productsSlice";
import collectionsSlice, { fetchCollections } from "./slices/collectionsSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
    productts: productsSlice.reducer,
    collections: collectionsSlice.reducer,
  },
});

store.dispatch(fetchCategories());
store.dispatch(fetchProducts());
store.dispatch(fetchCollections());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
