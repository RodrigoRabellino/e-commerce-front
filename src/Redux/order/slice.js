import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {},
  reducers: {
    createOrderReducer(state, action) {
      return { ...action.payload };
    },
    updateOrderReducer: {
      reducer: (state, action) => {
        return { ...action.payload };
      },
      prepare: (state, action) => {},
    },
    deleteOrderReducer(state, action) {
      console.log("delete order", action.payload);
      return {};
    },
  },
});

export const { createOrderReducer, deleteOrderReducer } = orderSlice.actions;
export default orderSlice.reducer;
