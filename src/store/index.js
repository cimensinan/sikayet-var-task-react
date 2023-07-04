import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slices/sidebar-slice";

export default configureStore({
  reducer: {
    left: sidebarSlice,
  },
});