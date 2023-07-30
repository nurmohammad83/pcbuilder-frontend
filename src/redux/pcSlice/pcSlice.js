import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    processor: [],
    motherboard: [],
    ram: [],
    'Power Supply Unit': [],
    'Storage Device': [],
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
      removeComponent:(state) => {
        state.Monitors=[]
        state.Mouse=[]
        state["Storage Device"]=[]
        state["Power Supply Unit"]=[]
        state.motherboard=[]
        state.processor=[]
        state.ram=[]
      },
    },
  });
  
  export const { addComponent,removeComponent } = pcSlice.actions;


export default pcSlice.reducer



