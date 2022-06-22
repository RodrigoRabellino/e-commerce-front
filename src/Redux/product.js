import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProduct(state, action) {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
