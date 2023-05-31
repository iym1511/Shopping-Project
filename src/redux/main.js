import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    shopaddCount(state, action) {
      // 위 배열안의 id와 값을올려줄 물건id가 같으면 증가
      let nums = state.findIndex((a) => a.id === action.payload);
      let deliveryMoney = 2500;
      state[nums].count++;
      console.log(state[nums].deliveryMoney);
      // 가격에다가 수량증가하면 가격++
      // if(state[nums].money < 40000){
      //   state[nums].money += state[nums].deliveryMoney;
      // }else{
        state[nums].money += state[nums].save;
      // }
    },
    shopminuseCount(state, action) {
      let nums = state.findIndex((a) => a.id === action.payload);
      if (state[nums].count > 1) {
        state[nums].count--;
        state[nums].money -= state[nums].save;
        // console.log(state[nums].money);
        // if(state[nums].money > 40000){
        //   state[nums].money -= state[nums].deliveryMoney;
        // }else{
        //   state[nums].money -= state[nums].save;
        // }
      }
    },
    shopdelete(state, action) {
      alert("삭제되었습니다.");
      return state.filter((a) => a.id !== action.payload);
    },
    shopAlldelete(state) {
      return (state = []);
    },
    shopcartAdd(state, action) {
      // 처음에 빈배열이라서 같은게 없어서 false 반환
      const someCheck = state.some((a) => a.id === action.payload.id);
      // console.log(someCheck);
      // 값이 있으면 true 값이 없으면 false
      // 처음에 빈배열이라 false 반환하니 거꾸로 true로 만들어줘서 if문 실행
      if (!someCheck) {
        state.push(action.payload);
      } else {
        alert("이미있는 상품입니다.");
      }
    },

    // payload로 받아온 체크된id랑 state안의 id찾아서 
    // true / false값 바꿔주면서 체크on/off 해준다.
    toggleCheckbox(state, action) {
      state.forEach((item) => {
        if (item.id === action.payload) {
          item.checked = !item.checked;
        }
      });
    },

    // 카드의 전체 check상태를 받아와서  
    // check값에 따라 직접 바꿔줌
    toggleCheckboxAll(state, action) {
      const isChecked = action.payload;
      state.forEach((item) => {
        if(item.checked == false){
          item.checked = isChecked;
        }else{
          item.checked = !isChecked;
        }
      });
    },

    deleteChecked(state) {
      return state.filter((item) => !item.checked);
    },

    // add: (state, action) => {
    //   const comment = state.comment.find((item) =>{
    //     item.id === action.payload.id
    //   })
    //   nextId++;
    //   state.push({
    //     id: nextId,
    //     pid: action.payload.pid, // pid하나만선택
    //     name: action.payload.name,
    //     text: action.payload.text, // text하나만 선택
    //   });
    //   console.log(nextId);
    //   console.log(comment)
    // },
  },
});

export const {
  shopaddCount,
  shopminuseCount,
  shopdelete,
  shopcartAdd,
  toggleCheckbox,
  deleteChecked,
  toggleCheckboxAll,
  shopAlldelete,
} = mainSlice.actions;

export default mainSlice.reducer;
