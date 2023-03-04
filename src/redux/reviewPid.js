import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

export const pidSlice = createSlice({
  name: "pid",
  initialState,
  reducers: {
    PidAdd: (state, action) => {
        state.push(action.payload);
        console.log(action.payload)
    },
    pid: (state) => {

    }
  },
});

export const { PidAdd } = pidSlice.actions;

export default pidSlice.reducer;
