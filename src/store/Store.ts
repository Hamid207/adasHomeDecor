import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice, { fetchCategories } from "./slices/categoriesSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
  },
});

store.dispatch(fetchCategories());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
