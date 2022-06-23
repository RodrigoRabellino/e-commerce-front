import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./product";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
