import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice, { fetchCategories } from "./slices/categoriesSlice";
import productsSlice, { fetchProducts } from "./slices/productsSlice";
import collectionsSlice, { fetchCollections } from "./slices/collectionsSlice";
import usersSlice, { fetchUsers } from "./slices/usersSlice";
import userTokenSlice from "./slices/userTokenSlice";
import favoritesSlice, { fetchFavorites } from "./slices/favoritesSlice";
import shoppingCartSlice, {
  fetchShoppingCart,
} from "./slices/shoppingCartSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
    productts: productsSlice.reducer,
    collections: collectionsSlice.reducer,
    users: usersSlice.reducer,
    userToken: userTokenSlice.reducer,
    faforites: favoritesSlice.reducer,
    shoppingCart: shoppingCartSlice.reducer,
  },
});

store.dispatch(fetchCategories());
store.dispatch(fetchProducts());
store.dispatch(fetchCollections());
store.dispatch(fetchUsers());
store.dispatch(fetchFavorites());
store.dispatch(fetchShoppingCart());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
