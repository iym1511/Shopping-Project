import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userlist: [
    // 임시데이터
    {
      id: "iym1511",
      name: "문일윤",
      password: "iym1511",
      email: "iym1511@naver.com",
      apiaddress: "땡땡아파트",
      apizonecode:"41234",
      detailAddress: "302동 201호",
      isLoggedIn: true,
      item: [],
      mypageitem: null,
      phonNumber : "01023126324",
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
        apiaddress: action.payload.apiaddress,
        apizonecode: action.payload.apizonecode,
        phonNumber: action.payload.phonNumber,
        detailAddress: action.payload.realDetail,
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
      console.log(action.payload);
    },
    updateAddress: (state, action) => {
      state.newUser.address = action.payload.address;
    },

    
    pushPid: (state, action) => {
      state.userlist = state.userlist.map((a)=>{
        console.log(action.payload.pid)
        // console.log(newUser.purchaseArray.find((a)= a.id == newUser.pid))
        return a.id == action.payload.id ? action.payload : a
      })
    },

    purchaseBoolean: (state, action) => {
      const newUser = state.userlist.find((a)=> a.id == action.payload.id);
      const userpid = newUser.purchaseArray.find((a)=> a.id == action.payload.pid);
      if(userpid.reviewCheck){
        userpid.reviewCheck = false
      }else{
        userpid.reviewCheck = true
      }
        


    },
    // purchaseTrue: (state, action) => {
    //   const newUser = state.userlist.find((a)=> a.id == action.payload.id);
    //   const userpid = newUser.purchaseArray.find((a)=> a.id == action.payload.pid);
    //   userpid.reviewCheck = true
    //   console.log(userpid.reviewCheck)
    // }
  },
});

export const { createUser, updateAddress, pushAddCart, ADDIT_USER, pushPid, purchaseBoolean} =
  signupSlice.actions;

export default signupSlice.reducer;
