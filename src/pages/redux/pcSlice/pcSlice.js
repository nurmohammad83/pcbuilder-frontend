import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    processor: [],
    motherboard: [],
    ram: [],
    'Power Supply Unit': [],
    Mouse: [],
    Monitors: [],
  };
  
  const pcSlice = createSlice({
    name: 'pcBuilder',
    initialState,
    reducers: {
      addComponent: (state, action) => {
        const { category, product } = action.payload;
        state[category] = [...state[category], product];
      },
    },
  });
  
  export const { addComponent } = pcSlice.actions;


export default pcSlice.reducer



