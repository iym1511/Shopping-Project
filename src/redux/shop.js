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
    delivery: "-",
    checked: false,
    reviewCheck : true,
    date : useDate,
    info: "-데일리 오버핏 가디건",
    info2:"-소프트 터치감",
    info3:"-유니섹스 상품",
    info4:"-얇은 두께감으로 다양한 코디 연출가능"
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
    delivery: "-",
    checked: false,
    reviewCheck : true,
    date : useDate,
    info: "-데일리 오버핏 가디건",
    info2:"-소프트 터치감",
    info3:"-유니섹스 상품",
    info4:"-얇은 두께감으로 다양한 코디 연출가능"
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
    delivery: "-",
    checked: false,
    reviewCheck : true,
    date : useDate,
    info: "-데일리 부클 니트",
    info2:"-탄탄한 라운드넥",
    info3:"-매력적인 데끼라인",
    info4:"-유니섹스 상품"
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
    delivery: "-",
    checked: false,
    reviewCheck : true,
    date : useDate,
    info: "-유니크 스마일니트",
    info2:"-두툼한 두께감",
    info3:"-탄탄한 넥,소매라인",
    info4:"-오버사이즈"
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
    delivery: "-",
    checked: false,
    reviewCheck : true,
    date : useDate,
    info: "-니트전문 업체의 하이퀄리티 제품",
    info2:"-군더더기 없이 심플한 와플 패턴 캌라니트",
    info3:"-위트 있는 카라 디테일 (탈부착X)",
    info4:"-굉장히 탄탄하고 신축성 높은 소재"
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
    delivery: "-",
    checked: false,
    reviewCheck : true,
    date : useDate,
    info: "-기존 체크와는 다른 유니크한 패턴의 가디건",
    info2:"-램스울 50% 함유 고급 소재로 제작",
    info3:"-램스울 소재로 일반 울 소재 보다 부드러운 터치감",
    info4:"-높은 보온성으로 한겨울에도 착용 가능"
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
    delivery: "-",
    checked: false,
    reviewCheck : true,
    date : useDate,
    info: "-심플한 감성의 데일리 니트",
    info2:"-데일리룩 높은 활용도",
    info3:"-높은 신축성으로 편한 착용감",
    info4:"-울 혼용 고급소재로 높은 보온성"
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
    delivery: "-",
    checked: false,
    reviewCheck : true,
    date : useDate,
    info: "-심플하면서 데일리한 브러쉬단가라 라운드니트",
    info2:"-부드럽고 포근한 터치감",
    info3:"-어떤 룩에도 매칭이 쉬운 베이직 단가라 패턴",
    info4:"-박시한 오버핏으로 편한 착용감"
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
    delivery: "-",
    checked: false,
    reviewCheck : true,
    date : useDate,
    info: "-군더더기 없이 심플한 원버튼카라 니트티셔츠",
    info2:"-여성분들도 데일리룩으로 착용 가능",
    info3:"-비스코스 혼용 고급소재로 굉장히 부드러운 터치감",
    info4:"-부드럽고 매끄러운 소재로 상쾌한 착용감"
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
    delivery: "-",
    checked: false,
    reviewCheck : true,
    date : useDate,
    info: "-모던한 하찌 폴라니트",
    info2:"-데일리 아이템",
    info3:"-높은 신축성",
    info4:"-활용도 높은 하찌니트"
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
    delivery: "-",
    checked: false,
    reviewCheck : true,
    date : useDate,
    info: "-위트 있는 배색 컬러감의 단가라니트",
    info2:"-고급혼용 소재로 제작",
    info3:"-높은 신축성과 알파카 소재 함유",
    info4:"-데일리룩으로 적극 추천"
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
    delivery: "-",
    checked: false,
    reviewCheck : true,
    date : useDate,
    info: "-위트 있는 배색 컬러감의 단가라니트",
    info2:"-고급혼용 소재로 제작",
    info3:"-높은 신축성과 알파카 소재 함유",
    info4:"-데일리룩으로 적극 추천"
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
