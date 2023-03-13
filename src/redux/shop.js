import { createSlice } from "@reduxjs/toolkit";

const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, "0");
const today = String(date.getDate()).padStart(2, "0");
const useDate = `${year}-${month}-${today}`

const initialState = [
  {
    id: 0,
    name: "피규어니트",
    count: 1,
    image: [require("../img/neat-1.jpg")],
    image2: [require("../img/neat-1-2.jpg")],
    image3: [require("../img/neat-1-3.jpg")],
    image4: [require("../img/neat-1-4.jpg")],
    image5: [require("../img/neat-1-5.PNG")],
    money: 21900,
    save: 21900,
    delivery: 2500,
    checked: false,
    reviewCheck : true,
    date : useDate
  },
  {
    id: 1,
    name: "파인캐시 가디건",
    count: 1,
    image: [require("../img/neat-2.jpg")],
    image2: [require("../img/neat-2-2.jpg")],
    image3: [require("../img/neat-2-3.jpg")],
    image4: [require("../img/neat-2-4.jpg")],
    image5: [require("../img/neat-2-5.PNG")],
    money: 31000,
    save: 31000,
    delivery: 2500,
    checked: false,
    reviewCheck : true,
    date : useDate
  },
  {
    id: 2,
    name: "부클 라운드니트",
    count: 1,
    image: [require("../img/neat-3.jpg")],
    image2: [require("../img/neat-3-2.jpg")],
    image3: [require("../img/neat-3-3.jpg")],
    image4: [require("../img/neat-3-4.jpg")],
    image5: [require("../img/neat-3-5.PNG")],
    money: 26000,
    save: 26000,
    delivery: 2500,
    checked: false,
    reviewCheck : true,
    date : useDate
  },
  {
    id: 3,
    name: "스마일 니트",
    count: 1,
    image: [require("../img/neat-4.jpg")],
    image2: [require("../img/neat-4-2.jpg")],
    image3: [require("../img/neat-4-3.jpg")],
    image4: [require("../img/neat-4-4.jpg")],
    image5: [require("../img/neat-4-5.PNG")],
    money: 18000,
    save: 18000,
    delivery: 2500,
    checked: false,
    reviewCheck : true,
    date : useDate
  },
  {
    id: 4,
    name: "와플 카라니트",
    count: 1,
    image: [require("../img/neat-5.jpg")],
    image2: [require("../img/neat-5-2.jpg")],
    image3: [require("../img/neat-5-3.jpg")],
    image4: [require("../img/neat-5-4.PNG")],
    image5: [require("../img/neat-5-5.PNG")],
    money: 51000,
    save: 51000,
    delivery: 2500,
    checked: false,
    reviewCheck : true,
    date : useDate
  },
  {
    id: 5,
    name: "울 퍼팩트 체크 가디건",
    count: 1,
    image: [require("../img/neat-6.jpg")],
    image2: [require("../img/neat-6-2.jpg")],
    image3: [require("../img/neat-6-3.jpg")],
    image4: [require("../img/neat-6-4.PNG")],
    image5: [require("../img/neat-6-5.PNG")],
    money: 36000,
    save: 36000,
    delivery: 2500,
    checked: false,
    reviewCheck : true,
    date : useDate
  },
  {
    id: 6,
    name: "골지 울 라운드니트",
    count: 1,
    image: [require("../img/neat-7.jpg")],
    image2: [require("../img/neat-7-2.jpg")],
    image3: [require("../img/neat-7-3.jpg")],
    image4: [require("../img/neat-7-4.PNG")],
    image5: [require("../img/neat-7-5.PNG")],
    money: 33000,
    save: 33000,
    delivery: 2500,
    checked: false,
    reviewCheck : true,
    date : useDate
  },
  {
    id: 7,
    name: "브러쉬 단가라 라운드니트",
    count: 1,
    image: [require("../img/neat-8.jpg")],
    image2: [require("../img/neat-8-2.jpg")],
    image3: [require("../img/neat-8-3.jpg")],
    image4: [require("../img/neat-8-4.PNG")],
    image5: [require("../img/neat-8-5.PNG")],
    money: 43000,
    save: 43000,
    delivery: 2500,
    checked: false,
    reviewCheck : true,
    date : useDate
  },
  {
    id: 8,
    name: "소프트 원버튼카라 니트 티셔츠",
    count: 1,
    image: [require("../img/neat-9.jpg")],
    image2: [require("../img/neat-9-2.jpg")],
    image3: [require("../img/neat-9-3.jpg")],
    image4: [require("../img/neat-9-4.PNG")],
    image5: [require("../img/neat-9-5.PNG")],
    money: 39000,
    save: 39000,
    delivery: 2500,
    checked: false,
    reviewCheck : true,
    date : useDate
  },
  {
    id: 9,
    name: "모던 하찌폴라",
    count: 1,
    image: [require("../img/neat-10.jpg")],
    image2: [require("../img/neat-10-2.jpg")],
    image3: [require("../img/neat-10-3.jpg")],
    image4: [require("../img/neat-10-4.jpg")],
    image5: [require("../img/neat-10-5.PNG")],
    money: 47000,
    save: 47000,
    delivery: 2500,
    checked: false,
    reviewCheck : true,
    date : useDate
  },
  {
    id: 10,
    name: "알파카 단가라 니트",
    count: 1,
    image: [require("../img/neat-11.jpg")],
    image2: [require("../img/neat-11-2.jpg")],
    image3: [require("../img/neat-11-3.jpg")],
    image4: [require("../img/neat-11-4.PNG")],
    image5: [require("../img/neat-11-5.PNG")],
    money: 21000,
    save: 21000,
    delivery: 2500,
    checked: false,
    reviewCheck : true,
    date : useDate
  },
  {
    id: 11,
    name: "바둑 체크니트",
    count: 1,
    image: [require("../img/neat-12.jpg")],
    image2: [require("../img/neat-12-2.jpg")],
    image3: [require("../img/neat-12-3.jpg")],
    image4: [require("../img/neat-12-4.jpg")],
    image5: [require("../img/neat-12-5.PNG")],
    money: 30000,
    save: 30000,
    delivery: 2500,
    checked: false,
    reviewCheck : true,
    date : useDate
  },
];

export const shopSlice = createSlice({
  name: "players",
  initialState,
  reducers : {
    CountPlus(state, action) {
      // 위 배열안의 id와 값을올려줄 물건id가 같으면 증가
      let nums = state.findIndex((a) => a.id === action.payload);
      state[nums].count++;
      // 가격에다가 수량증가하면 가격++
      state[nums].money += state[nums].save;
    },
    CountMinuse(state, action) {
      let nums = state.findIndex((a) => a.id === action.payload);
      if (state[nums].count > 1) {
        state[nums].count--;
        state[nums].money -= state[nums].save;
      }
    },
  }
});

export const {CountPlus,CountMinuse} = shopSlice.actions;

export default shopSlice.reducer;
