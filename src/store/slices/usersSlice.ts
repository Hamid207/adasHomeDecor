import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UsersService } from "../../services/users.service";

export const fetchUsers = createAsyncThunk("getUsers", async () => {
  const data = await UsersService.getUsers();
  return data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default usersSlice;
