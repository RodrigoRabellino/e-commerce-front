import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addItemToCart: {
      reducer: (state, action) => {
        console.log(action.payload);
      },
      prepare: (state, action) => {
        return {
          createdAt: new Date(),
          payload: { ...action.payload },
        };
      },
    },
    RemoveItemToCart(state, action) {},
  },
});

export const { addItemToCart, RemoveItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
