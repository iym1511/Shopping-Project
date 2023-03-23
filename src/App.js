import logo from "./logo.svg";
import "./App.css";
import Cart from "./components/Cart";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Neat";
import Layout from "./page/Layout";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
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
import Notfound from "./components/Notfound";
import { AnimatePresence } from "framer-motion";
import Loading from "./page/Loading";

function App() {
  const location = useLocation();

  // useEffect 반응용
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(function(){
        setLoading(false)
        sessionStorage.setItem("key", true)
      },3000)
    };
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
      
    };
  }, [window.onload]);

  // 1초후에 보낸 true키값도 인식하기위해 한번더 가져와서 랜더해줌
  useEffect(()=>{
    sessionStorage.getItem("key")
  },[loading])


  // 이 윈도우가 한번 열릴때 세션에 true값줌 (recent값)
  // useEffect 한번만줌
  useEffect(()=>{
    sessionStorage.setItem("fold", true);
  },[window.onload])


  return (
    <div className="App">
      {
        sessionStorage.getItem("key") == null ? (
          <Loading />
        ):(
      <AnimatePresence>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/neat" element={<Neat />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/detailpage/:id" element={<DetailPage />}></Route>
          <Route path="/login" element={<Login />}></Route> 
          {/* <Route path="/shirt" element={<Shirt />}></Route> */}
          {/* <Route path="/about" element={<Shoes />}></Route> */}
          {/* <Route path="/bottom" element={<Bottom />}></Route> */}
          <Route index path="/" element={<Main />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/review/:id" element={<Review />} />
        </Route>
          <Route path="/*" element={<Notfound />}></Route>
      </Routes>
      </AnimatePresence>
      )
      }
    </div>
  );
}

export default App;
