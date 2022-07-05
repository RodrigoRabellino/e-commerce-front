import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    showProducts(state, action) {
      return (state = action.payload);
    },
  },
});

export const { showProducts } = productsSlice.actions;
export default productsSlice.reducer;
