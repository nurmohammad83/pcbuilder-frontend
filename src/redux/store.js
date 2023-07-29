import { configureStore } from "@reduxjs/toolkit";
import pcReducer from "./pcSlice/pcSlice";

export const store =  configureStore({
  reducer: { pc: pcReducer },
});