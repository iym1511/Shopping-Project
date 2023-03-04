import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    name: "피규어니트",
    count: 1,
    image: [require("../img/neat-1.jpg")],
    money: 21900,
    save: 21900,
    delivery: 2500,
    checked: false,
    reviewCheck : true
  },
  {
    id: 1,
    name: "파인캐시 가디건",
    count: 1,
    image: [require("../img/neat-2.jpg")],
    money: 31000,
    save: 31000,
    delivery: 2500,
    checked: false,
    reviewCheck : true
  },
  {
    id: 2,
    name: "부클 라운드니트",
    count: 1,
    image: [require("../img/neat-3.jpg")],
    money: 26000,
    save: 26000,
    delivery: 2500,
    checked: false,
    reviewCheck : true
  },
  {
    id: 3,
    name: "스마일 니트",
    count: 1,
    image: [require("../img/neat-4.jpg")],
    money: 18000,
    save: 18000,
    delivery: 2500,
    checked: false,
    reviewCheck : true
  },
  {
    id: 4,
    name: "와플 카라니트",
    count: 1,
    image: [require("../img/neat-5.jpg")],
    money: 51000,
    save: 51000,
    delivery: 2500,
    checked: false,
    reviewCheck : true
  },
  {
    id: 5,
    name: "울 퍼팩트 체크 가디건",
    count: 1,
    image: [require("../img/neat-6.jpg")],
    money: 36000,
    save: 36000,
    delivery: 2500,
    checked: false,
    reviewCheck : true
  },
  {
    id: 6,
    name: "골지 울 라운드니트",
    count: 1,
    image: [require("../img/neat-7.jpg")],
    money: 33000,
    save: 33000,
    delivery: 2500,
    checked: false,
    reviewCheck : true
  },
  {
    id: 7,
    name: "브러쉬 단가라 라운드니트",
    count: 1,
    image: [require("../img/neat-8.jpg")],
    money: 43000,
    save: 43000,
    delivery: 2500,
    checked: false,
    reviewCheck : true
  },
  {
    id: 8,
    name: "소프트 원버튼카라 니트 티셔츠",
    count: 1,
    image: [require("../img/neat-9.jpg")],
    money: 39000,
    save: 39000,
    delivery: 2500,
    checked: false,
    reviewCheck : true
  },
];

export const shopSlice = createSlice({
  name: "players",
  initialState,
});

export const {} = shopSlice.actions;

export default shopSlice.reducer;
