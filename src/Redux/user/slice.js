import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    loginUser(state, action) {
      return { ...action.payload };
    },
    logOutUser(state, action) {
      console.log("logOut user:", action.payload);
      return {};
    },
  },
});

export const { loginUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;
