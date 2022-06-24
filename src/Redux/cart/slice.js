import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart(state, action) {
      console.log(action.payload);
      // state = current(state);
      console.log(state);
      // state.push({ ...action.payload });
    },

    RemoveItemToCart(state, action) {},
  },
});

export const { addItemToCart, RemoveItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
