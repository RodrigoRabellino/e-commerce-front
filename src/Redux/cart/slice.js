import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart(state, action) {
      const prodInCart = state.find((item) => item._id === action.payload._id);
      if (prodInCart) {
        action.payload.qty === 0
          ? (prodInCart.qty += 1)
          : (prodInCart.qty += action.payload.qty);
      } else state.push({ ...action.payload });
    },

    deleteItemCart(state, action) {
      const prodInCart = state.find((item) => item._id === action.payload._id);
      return state.filter((item) => item._id !== action.payload._id);
    },
    addOneQty(state, action) {
      const prodInCart = state.find((item) => item._id === action.payload._id);
      prodInCart.qty += 1;
    },
    removeOneQty(state, action) {
      const prodInCart = state.find((item) => item._id === action.payload._id);
      if (prodInCart.qty > 1) {
        prodInCart.qty -= 1;
      } else {
        return state.filter((item) => item._id !== action.payload._id);
      }
    },
    emptyCart(state, action) {
      console.log("emptyCart");
      return (state = []);
    },
  },
});

export const {
  addItemToCart,
  removeItemCart,
  deleteItemCart,
  addOneQty,
  removeOneQty,
  emptyCart,
} = cartSlice.actions;
export default cartSlice.reducer;
