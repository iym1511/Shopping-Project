import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userlist: [
    // 임시데이터
    {
      id: "qwe",
      name: "문일윤",
      password: "qwe",
      email: "iym1511@naver.com",
      address: null,
      detailAddress: null,
      isLoggedIn: true,
      item: [],
      comment: [],
    },
  ],
};

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    createUser: (state, action) => {
      const newUser = {
        id: action.payload.id,
        name: action.payload.name,
        password: action.payload.password,
        email: action.payload.email,
        address: action.payload.address,
        zonecode: action.payload.zonecode,
        phonNumber: action.payload.phonNumber,
        detailAddress: action.payload.detailAddress,
        delComment: action.payload.delComment,
        item: action.payload.item,
        mypageitem: action.payload.mypageitem,
        pid : action.payload.pid
      };
      const newUserlist = state.userlist.concat(newUser);
      state.userlist = newUserlist;
    },
    ADDIT_USER: (state, action) => {
      state.userlist = state.userlist.map((user) => {
        // 받아온id랑 안에있는 id가 같으면 받아온거로 아니면 원래껄로
        return action.payload.id === user.id ? action.payload : user;
      }); // 맵이니까 하나씩 리턴해서 다 출력해줌
    },
    updateAddress: (state, action) => {
      state.newUser.address = action.payload.address;
    },

    // 테스트
    pushPid: (state, action) => {
      state.userlist = state.userlist.map((a)=>{
        return a.id == action.payload.id ? action.payload : a
      })
    }
  },
});

export const { createUser, updateAddress, pushAddCart, ADDIT_USER, pushPid } =
  signupSlice.actions;

export default signupSlice.reducer;
