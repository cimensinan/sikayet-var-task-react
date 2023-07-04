import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "left",
  initialState: {
    sidebarLeft: false,
  },
  reducers: {
    chevronClicked: (state, action) => {
      state.sidebarLeft = action.payload;
    },
  },
});

export const { chevronClicked } = sidebarSlice.actions;
export default sidebarSlice.reducer;