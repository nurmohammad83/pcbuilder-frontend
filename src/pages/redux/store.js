import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
import pcSliceReducer from "./features/pcSlice/pcSlice";

export default configureStore({
  reducer: { pc: pcSliceReducer },
});