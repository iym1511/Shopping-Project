import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import { shopcartAdd, shoptextAdd } from "../redux/main";
import '../css/DetailPage.css'
import { add, remove } from "../redux/comment";
import { addCart, loginUser, shopcartAddtt } from "../redux/user";
import { cartadd, purchaseBoolean} from "../redux/singup";
import Modal from "./Modal";
import { removeReview } from "../redux/review";
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import Pagenation from "./Pagenation";
import Recent from "./Recent";
import { CountMinuse, CountPlus } from "../redux/shop";


const DetailPage = () => {
    let {id} = useParams();
    const shop = useSelector((state) => state);
    const commentlist = useSelector((state) => state);
    const reviewComment = useSelector((state) => state.review);
    const users = useSelector((state) => state.user);
    const sign = useSelector((state) => state.signup);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    // 모달창
    const [showModal, setShowModal] = useState(false);
    
    // 로그인 유무 체크
    const [login, setLogin] = useState(false);

    // useParams :id 값이랑 배열안에있는 id값을 같은걸로 찾아줌
    const shoplist = shop.players.find(r=> r.id == id);
    
    // pid안에있는 useParams id랑 같으면 필터
    const commentfind = commentlist.comment.filter(r => r.pid == id);

    // 리뷰
    const reviewfind = reviewComment.filter(r => r.pid == id);

    // 현재 로그인한 유저랑 회원가입된 유저 찾아줌 / 댓글 이름별출력도 이걸로함
    const findUser = sign.userlist.find((user)=> user.id == users.id);



    const [comment, setComment] = useState(
        {
            id :0,
            pid: id,
            name: findUser.name, // 일치한 유저 찾아서 댓글에 넣어줌
            text : "",
        }
    )

    const handleText = (e) => {
        setComment({...comment, text : e.target.value})
    }

    const onReset = () => {
        setComment({...comment, text : ""})
    }

    const addtext = (e) =>{
        e.preventDefault()
        if(comment.text !== ""){
            dispatch(add(comment))
        }else{
            alert("댓글을 작성해주세요")
        }
        onReset();
        document.querySelector(".input").value="";
    }
    
    const cartAdd = () => {
        dispatch(shopcartAdd(shoplist))
        setShowModal(true)
    }

    const logoutMode = () => {
        alert("로그인 후 이용해주세요.")
        navigate('/login')
    }

    // 로그인 판별
    useEffect(() => {
        setLogin(users.isLoggedIn ? true : false);
    }, [users]);


    // Pagination
    const [page, setPage] = useState(1);





    return (  
        <div className="detail-box">
            {/* 모달창 */}
            {showModal ? <Modal setShowModal={setShowModal}/> : null}
            {/* 같은 이미지 출력 */}
            {
                users.isLoggedIn ? (
                <div className="detail-item">
                    <div className="detail-container">
                        <div className="detail-imgbox">
                            <img src={shoplist.image} className="detail-img"/>
                        </div>
                        <div className="detail-textbox">
                            <div className="detail-fixbox">
                            <p className="detail-text">{shoplist.name}</p>
                            <div className="detail-count-box">
                                <button onClick={()=>{dispatch(CountPlus(shoplist.id))}}>+</button>
                                <div className="detail-count">{shoplist.count}</div>
                                <button onClick={()=>{dispatch(CountMinuse(shoplist.id))}}>-</button>
                            </div>
                            <p className="detail-money"><span>총 삼품금액</span><span>(수량)</span> KRW {shoplist.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                            <button onClick={cartAdd}>장바구니 담기</button>
                            </div>
                        </div>
                    </div>
                </div>
                ) : (
                    <div className="detail-item">
                    <div className="detail-container">
                        <img src={shoplist.image} className="detail-img"/>
                        <div className="detail-textbox">
                            <div className="detail-fixbox">
                                <p className="detail-text">{shoplist.name}</p>
                                <p className="detail-money">판매가 KRW {shoplist.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                <button onClick={logoutMode}>장바구니 담기</button>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }


            {
                reviewfind.length != 0 ? (

            <div className="detail-reviewBox">
            {
                reviewfind.slice(3   * (page - 1), 3 * (page - 1) + 3).map((a)=>{
                    let star = a.rate
                    const showStar = () => {
                        switch(star) {
                            case 1 : 
                            return(
                            <Stars>
                                <FaStar className="yellowStar"/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </Stars>
                            )
                            case 2 : 
                            return(
                            <Stars>
                                <FaStar className="yellowStar"/>
                                <FaStar className="yellowStar"/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </Stars>
                            )
                            case 3 : 
                            return(
                            <Stars>
                                <FaStar className="yellowStar"/>
                                <FaStar className="yellowStar"/>
                                <FaStar className="yellowStar"/>
                                <FaStar/>
                                <FaStar/>
                            </Stars>
                            )
                            case 4 : 
                            return(
                            <Stars>
                                <FaStar className="yellowStar"/>
                                <FaStar className="yellowStar"/>
                                <FaStar className="yellowStar"/>
                                <FaStar className="yellowStar"/>
                                <FaStar/>
                            </Stars>
                            )
                            case 5 : 
                            return(
                            <Stars>
                                <FaStar className="yellowStar"/>
                                <FaStar className="yellowStar"/>
                                <FaStar className="yellowStar"/>
                                <FaStar className="yellowStar"/>
                                <FaStar className="yellowStar"/>
                            </Stars>
                            )
                        }
                    } 

                    return (
                        <div className="detail-mapbox">
                            <div className="detail-userbox">
                                <div className="detail-rate">{showStar()}</div>
                                <div className="detail-reviewName">NAME : {a.name}</div>
                                <div className="detail-reviewDate">{a.date}</div>
                            </div>
                            <div className="detail-flexbox">
                                <div className="detail-reviewText">{a.text}</div>
                                {
                                    findUser.name == a.name ? ( // purchaseTrue는 삭제시 리뷰값을 true로 되돌려서 다시 리뷰작성할수있게
                                        <button onClick={()=>{dispatch(removeReview(a.id))
                                            dispatch(purchaseBoolean({...findUser}))}
                                        } className="detail-reviewBtn">x</button>
                                    ) : (
                                        <></>
                                    )
                                }
                            </div>
                        </div>
                    )
                    
                }) 
            }
            </div>
            ) : (
                <p>리뷰가 없습니다.</p>
            )

        }
            <Pagenation page={page} reviewfind={reviewfind} setPage={setPage}/>


            {
                users.isLoggedIn ? (
                    <form onSubmit={addtext} className="detail-form">
                    <input type="text" className="detail-input" onChange={handleText} placeholder="댓글을 입력하여 주십시요"/>
                    <button className="detail-btn">QnA작성</button>
                </form>
                ) : (
                    <div>
                        <form onSubmit={addtext}>
                            <input type="text" className="input" onChange={handleText} disabled placeholder="로그인 후 이용해 주십시요"/>
                            <button className="detail-btn">QnA작성</button>
                        </form>
                    </div>
                )
            }


            {
                commentfind.map((a, i) => (
                    <div className="map-box">
                        <div className="inputbox">
                        <p className="detail-name">{a.name} : </p>
                        <p className="inputtext">{a.text}</p>
                        {   // 로그인 유저 name이랑 코멘드에서 나오는 name 같으면 x할수있게
                            findUser.name == a.name ? (
                                <button onClick={()=>{dispatch(remove(a.id))}} className="xbtn">x</button>
                                ) : (
                                    <p></p>
                            )
                        }    
                        </div>
                    </div>   
                ))
            }
            
            <Recent />

            {/* <div className="detail-outlet">
                <div className="detail-navbox">
                    <div className="detail-nav1" onClick={reviewNav}>Review</div>
                    <div className="detail-nav2" onClick={QAnav}>Q & A</div>
                </div>
                <div>
                    <Outlet /> Outlet은 본인 Route안에 있는것들 보여줌
                </div>
            </div> */}
        </div>
    );
}
 
export default DetailPage;

const Stars = styled.div`
  padding-top: 5px;

  & svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;