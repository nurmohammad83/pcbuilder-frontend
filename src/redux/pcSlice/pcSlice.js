import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Processor: [],
    Motherboard: [],
    Ram: [],
    'Power Supply Unit': [],
    'Storage Device': [],
    Mouse: [],
    Monitors: [],
    Keyboard: [],
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
        state.Motherboard=[]
        state.Processor=[]
        state.Ram=[]
        state.Keyboard=[]
      },
    },
  });
  
  export const { addComponent,removeComponent } = pcSlice.actions;


export default pcSlice.reducer



