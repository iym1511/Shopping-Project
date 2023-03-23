import { NavLink, useNavigate } from "react-router-dom";
import '../css/Nav.css'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from "react";
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
  
  const [check, setCheck] = useState()

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
    setCheck(false)
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

  const changeCheck = (e) => {
    if (e.target.checked) {
      setCheck(true)
    } else {
      setCheck(false)
    }
  }

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

    // 모달 외부 클릭시 끄기 처리
    // Modal 창을 useRef로 취득
    const modalRef = useRef(null);
    
    useEffect(() => {
        // 이벤트 핸들러 함수
        const handler = (event) => {
            // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
            if (modalRef.current && !modalRef.current.contains(event.target)) {
              setCheck(false)
            }
        };
        

        // 이벤트 핸들러 등록
        document.addEventListener('mousedown', handler);
        // document.addEventListener('touchstart', handler); // 모바일 대응
        
        return () => {
            // 이벤트 핸들러 해제
            document.removeEventListener('mousedown', handler);
            // document.removeEventListener('touchstart', handler); // 모바일 대응
        };
    });
  

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

            {/* <div className={`nav-shoes ${scrollActive ? ' ' : 'nav-shoes2'}`}>
              <NavLink to="/about" className="nav-text">ABOUT</NavLink>
            </div> */}
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
              <input type="checkbox" id="check_box" checked={check} onClick={(e)=>{changeCheck(e)}} />
              <label for="check_box" className={`nav-hamLabel ${scrollActive ? '': 'nav-hamLabel2'}`} >
                <span ref={modalRef}></span>
                <span ref={modalRef}></span>
                <span></span>
              </label>
              <div id="side_menu" ref={modalRef}>
                {
                  login ? (
                    <>
                    <div className="nav-userbox" style={{marginLeft:"90px"}}>
                      <div className="nav-userhi" style={{marginTop:"-20px"}}>{userName.name}님 반갑습니다.</div>
                      <div className="nav-log-mypageBox">
                        <button className="nav-logoutBtn" onClick={logOut} >로그아웃</button>
                      </div>
                    </div>
                <ul style={{marginTop:"40px"}}>
                  <li>-<NavLink to="/neat" className="nav-HamLoginBtn" onClick={()=>{setCheck(false)}}>NEAT</NavLink></li>
                  <li>-<NavLink to="/cart" className="nav-HamLoginBtn" onClick={()=>{setCheck(false)}}>CART</NavLink></li>
                  <li>-<NavLink to="/mypage" className="nav-HamLoginBtn" onClick={()=>{setCheck(false)}}>MYPAGE</NavLink></li>
                </ul>
                    </>
                  ) : (
                    <>
                    <div className="nav-HamNoneLoginText">로그인 후 이용해주세요.</div>
                    <NavLink to="/login" onClick={()=>{setCheck(false)}} style={{textDecoration:"none"}}>
                      <div className="nav-HamNoneLogin">LOGIN</div>
                    </NavLink>
                    <div style={{marginTop:"5px"}}>-<NavLink to="/neat" className="nav-HamLogoutBtn" onClick={()=>{setCheck(false)}}>NEAT</NavLink></div>
                    </>
                  )
                }
              
              </div>
              <div className={`nav-main ${scrollActive ? ' ' : 'nav-main2'}`}>
              <NavLink to="/" className="nav-text">
                <div className="nav-img2"></div>
              </NavLink>
            </div>
            
        </div>
    );
}

export default Nav;