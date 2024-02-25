import { createSlice } from "@reduxjs/toolkit";

const searchOpacityViewSlice = createSlice({
  name: "searchOpacityView",
  initialState: { boolean: false, searchValue: "" },
  reducers: {
    opacityView: (state, actions) => {
      state.boolean = actions.payload;
    },

    searchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { opacityView, searchValue } = searchOpacityViewSlice.actions;
export default searchOpacityViewSlice;
