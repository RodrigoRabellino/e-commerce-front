import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./product";
import userReducer from "./user/slice";
import cartReducer from "./cart/slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
