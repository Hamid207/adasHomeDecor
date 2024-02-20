import { createSlice } from "@reduxjs/toolkit";

const userTokenSlice = createSlice({
  name: "userToken",
  initialState: { token: "" },
  reducers: {
    userToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { userToken } = userTokenSlice.actions;
export default userTokenSlice;
