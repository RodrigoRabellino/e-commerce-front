import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    loginUserReducer(state, action) {
      console.log(action.payload);
      return { ...action.payload };
    },
    logOutUserReducer(state, action) {
      console.log("logOut user:", action.payload);
      return {};
    },
  },
});

export const { loginUserReducer, logOutUserReducer } = userSlice.actions;
export default userSlice.reducer;
