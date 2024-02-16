import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice, { fetchCategories } from "./slices/categoriesSlice";
import productsSlice, { fetchProducts } from "./slices/productsSlice";
import collectionsSlice, { fetchCollections } from "./slices/collectionsSlice";
import usersSlice, { fetchUsers } from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
    productts: productsSlice.reducer,
    collections: collectionsSlice.reducer,
    users: usersSlice.reducer,
  },
});

store.dispatch(fetchCategories());
store.dispatch(fetchProducts());
store.dispatch(fetchCollections());
store.dispatch(fetchUsers());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
