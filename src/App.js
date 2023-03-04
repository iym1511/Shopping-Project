import logo from "./logo.svg";
import "./App.css";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Neat";
import Layout from "./page/Layout";

import { useSelector } from "react-redux";
import { useState } from "react";
import DetailPage from "./components/DetailPage";

import Login from "./page/Login";
import Main from "./components/Main";
import Shirt from "./components/Shirt";
import Shoes from "./components/Shoes";
import Neat from "./components/Neat";
import Bottom from "./components/Bottom";
import Signup from "./page/Signup";
import MyPage from "./page/MyPage";
import Review from "./components/Review";
import DetailNav from "./components/DetailNav";
import DetailNav2 from "./components/DetailNav2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/neat" element={<Neat />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/detailpage/:id" element={<DetailPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/shirt" element={<Shirt />}></Route>
          <Route path="/shoes" element={<Shoes />}></Route>
          <Route path="/bottom" element={<Bottom />}></Route>
          <Route index path="/" element={<Main />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/review/:id" element={<Review />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
