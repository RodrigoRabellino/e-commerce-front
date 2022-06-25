import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart(state, action) {
      const prodInCart = state.find((item) => item._id === action.payload._id);
      prodInCart
        ? (prodInCart.qty += 1)
        : state.push({ ...action.payload, qty: 1 });
    },

    RemoveItemCart(state, action) {
      console.log(action.payload._id);
      const prodInCart = state.find((item) => item._id === action.payload._id);
      if (prodInCart.qty > 1) {
        prodInCart.qty -= 1;
      } else {
        return state.filter((item) => item._id !== action.payload._id);
      }
    },
  },
});

export const { addItemToCart, RemoveItemCart } = cartSlice.actions;
export default cartSlice.reducer;
