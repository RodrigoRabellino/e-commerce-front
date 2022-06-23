import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import productsReducer from "./product";
import userReducer from "./user/slice";
import cartReducer from "./cart/slice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducerCart = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    products: productsReducer,
    user: userReducer,
    cart: persistedReducerCart,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);

export default store;
