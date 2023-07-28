import { configureStore } from "@reduxjs/toolkit";
import pcSliceReducer from "./pcSlice/pcSlice";

export default configureStore({
  reducer: { pc: pcSliceReducer },
});