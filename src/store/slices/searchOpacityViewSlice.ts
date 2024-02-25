import { createSlice } from "@reduxjs/toolkit";

const searchOpacityViewSlice = createSlice({
  name: "searchOpacityView",
  initialState: { boolean: false },
  reducers: {
    opacityView: (state, actions) => {
      state.boolean = actions.payload;
    },
  },
});

export const { opacityView } = searchOpacityViewSlice.actions;
export default searchOpacityViewSlice;
