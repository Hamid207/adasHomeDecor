import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CollectionsService } from "../../services/collections.service";

export const fetchCollections = createAsyncThunk("getCollections", async () => {
  const data = await CollectionsService.getCollctions();
  return data;
});

const collectionsSlice = createSlice({
  name: "collections",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCollections.fulfilled, (state, action) => {
      console.log(action);

      return action.payload;
    });
  },
});

export default collectionsSlice;
