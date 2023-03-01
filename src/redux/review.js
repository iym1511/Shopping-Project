import { createSlice } from "@reduxjs/toolkit";

let nextId = 0;

const initialState = [];

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    addReview: (state, action) => {
      nextId++;
      state.push({
        id: nextId,
        pid: action.payload.pid,
        name: action.payload.name,
        text: action.payload.text, // text하나만 선택
        date: action.payload.date,
        rate: action.payload.rate
      });
      console.log(action.payload.rate);
    },
    removeReview: (state, action) => {
      alert("삭제되었습니다.");
      return state.filter((e) => e.id !== action.payload);
    },
  },
});

export const { addReview, removeReview } = reviewSlice.actions;

export default reviewSlice.reducer;
