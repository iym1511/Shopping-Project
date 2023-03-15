import { NavLink, useNavigate } from "react-router-dom";
import '../css/Nav.css'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/user";
import { shopAlldelete } from "../redux/main";

const Nav = () => {

  // 스크롤 관련
  const [navActive, setNavActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);

  // 로그인 유무 체크
  const [login, setLogin] = useState(false);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 리덕스 user 가져옴
  const userName = useSelector((state) => state.user);
  // 로그인
  const users = useSelector((state) => state.user);
  // 로그인 로그 확인용
  const log = useSelector((state)=> state.loginlog)

  // 장바구니
  const cart = useSelector((state)=> state.main)

  // 현재 로그인한 유저랑 회원가입된 유저 찾아줌 (지워도댐 확인용)
  const sign = useSelector((state) => state.signup);
  const findUser = sign.userlist.find((user)=> user.id == users.id)

  // 장바구니 로그인 & 로그아웃
  const loginMarket = () => {
    alert("로그인 후 이용하세요.")
    navigate("/login")
  }

  // 로그아웃
  const logOut = () => {
    setLogin(false);
    dispatch(logout());
    dispatch(shopAlldelete());
    navigate("");
    console.log(users)
    console.log(findUser)
    console.log(log)
  };


  const scrollFixed = () => {
    if (scrollY > 70) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else{
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  };

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener('scroll', scrollFixed);
    };
    scrollListener();
    return () => {
      window.removeEventListener('scroll', scrollFixed);
    };
  });

  // 로그인 판별
  useEffect(() => {
    setLogin(users.isLoggedIn ? true : false);
  }, [users]);

  

    return (  
        <div className={`nav-box ${scrollActive ? 'nav-shadow' : 'nav-box2'}`}>
            <div className={`nav-main ${scrollActive ? ' ' : 'nav-main2'}`}>
              <NavLink to="/" className="nav-text">
                {/* <img src={require("../img/logo-1.png")} className="nav-logo" /> */}
                <div className="nav-img"></div>
              </NavLink>
            </div>

            <div className={`nav-neat ${scrollActive ? ' ' : 'nav-neat2'}`} >
              <NavLink to="/neat" className="nav-text">NEAT</NavLink>
            </div>
{/*             
            <div className={`nav-shirt ${scrollActive ? ' ' : 'nav-shirt2'}`}>
              <NavLink to="/shirt" className="nav-text">SHIRT</NavLink>
            </div> */}

            <div className={`nav-shoes ${scrollActive ? ' ' : 'nav-shoes2'}`}>
              <NavLink to="/about" className="nav-text">ABOUT</NavLink>
            </div>
{/* 
            <div className={`nav-bottom ${scrollActive ? ' ' : 'nav-bottom2'}`}>
              <NavLink to="/bottom" className="nav-text">BOTTOM</NavLink>
            </div> */}

            
            
                {/* <div className={`nav-cart ${scrollActive ? ' ' : 'nav-cart2'}`}>
                  <NavLink to="/cart">
                      <img src={require("../img/shopping-cart.png")} width={25} />
                  </NavLink>
                </div> */}


            {
              login ? (
                <div className={`nav-cart ${scrollActive ? ' ' : 'nav-cart2'}`}>
                  <div className="nav-login-icon">
                    <NavLink to="/cart">
                        <img src={require("../img/shopping-cart.png")} width={25} />
                    </NavLink>
                    <p className="nav-cart-length">{cart.length}</p>
                    <div className="nav-userbox">
                      <div className="nav-userhi">{userName.name}님 반갑습니다.</div>
                      <div className="nav-log-mypageBox">
                        <button className="nav-logoutBtn" onClick={logOut}>로그아웃</button>
                        <NavLink to="/mypage" className="nav-mypage-btn">
                          <div className="nav-mypage">마이페이지</div>
                        </NavLink>
                      </div>
                    </div>
                    
                  </div>
                </div>
              ) : (
                <div className={`nav-cart ${scrollActive ? ' ' : 'nav-cart2'}`}>
                  <div className="nav-logout-icon">
                    <div onClick={loginMarket} style={{cursor:"pointer"}}>
                        <img src={require("../img/shopping-cart.png")} className="nav-cartimg2" width={25} />
                    </div>
                    <p className="nav-cart-length">{cart.length}</p>
                    <NavLink to="/login">
                        <img src={require("../img/account.png")} className="nav-userimg2" width={25} />
                    </NavLink>
                  </div>
              </div>
              )
            }

            {/* {
              login ? (
                <div>
                <NavLink to="/mypage">
                  <div className="nav-mypage">마이페이지</div>
                </NavLink>
                </div>
              ):(
                <div></div>
              )
            } */}
            
            
        </div>
    );
}
 
export default Nav;