import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {},
  reducers: {
    createOrderReducer(state, action) {
      return { ...action.payload };
    },
    updateOrderReducer(state, action) {
      return { ...state, shippingDetails: { ...action.payload } };
    },
    deleteOrderReducer(state, action) {
      console.log("delete order", action.payload);
      return {};
    },
  },
});

export const { createOrderReducer, deleteOrderReducer, updateOrderReducer } =
  orderSlice.actions;
export default orderSlice.reducer;
