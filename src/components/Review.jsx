import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/Review.css'
import { add } from '../redux/comment';
import { addReview } from '../redux/review';

import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

const Review = ({setShowReviewModal, showReviewModal}) => {

    // 별점
    const [clicked, setClicked] = useState([false, false, false, false, false]);
    let [starScore, setStarScore] = useState(); 

    let {id} = useParams();

    const navigate = useNavigate();

    const users = useSelector((state) => state.user);
    const sign = useSelector((state) => state.signup);
    const reviews = useSelector((state) => state.review);

    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const today = String(date.getDate()).padStart(2, "0");
    const [userDate, setUserDate] = useState(`${year}-${month}-${today}`);

    const dispatch = useDispatch();

    // 현재 로그인한 유저랑 회원가입된 유저 찾아줌 / 댓글 이름별출력도 이걸로함
    const findUser = sign.userlist.find((user)=> user.id == users.id)

      const [comment, setComment] = useState(
          {
              id :0,
              pid : id,
              name: findUser.name, // 일치한 유저 찾아서 댓글에 넣어줌
              text : "",
              date : userDate,
              rate : starScore
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
              dispatch(addReview(comment))
              alert("리뷰 등록 완료!")
              navigate("/mypage")
          }else{
              alert("댓글을 작성해주세요")
              console.log(reviews)
          }
          onReset();
          document.querySelector(".input").value="";
      }



    // 모달 외부 클릭시 끄기 처리
    // Modal 창을 useRef로 취득
    const modalRef = useRef(null);
    
    useEffect(() => {
        // 이벤트 핸들러 함수
        const handler = (event) => {
            // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowReviewModal(false);
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

    const ARRAY = [0, 1, 2, 3, 4];


  


  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
    console.log(clickStates)
  };

  const sendReview = () => {
    let score= clicked.filter(Boolean).length;
    setStarScore(clicked.filter(Boolean).length);
    // fetch('http://52.78.63.175:8000/movie', {
    //   method: 'POST',
    //   Headers: {
    //     Authroization: 'e7f59ef4b4900fe5aa839fcbe7c5ceb7',
    //   },
    //   body: JSON.stringify({
    //     movie_id:1
    //     star: score,
    //   }),
    // });
  };
 
  useEffect(() => {
    sendReview();
}, [clicked]); //컨디마 컨디업

    useEffect(()=>{
        console.log(reviews);
    },[])

    return (  
        <div>
            <div className={`review-modal ${showReviewModal ? 'review-modalOpen' : ''}`} ref={modalRef}>
                <h1 className='review-title'>Review</h1>
                <p className='review-subtitle'>상품은 어떠셨나요? 리뷰를작성하여 후기를 남겨주세요!</p>
                <form onSubmit={addtext}>
                <Stars>
                    {
                        ARRAY.map((el, idx) => {
                        return (
                            <FaStar
                            key={idx}
                            size="30"
                            onClick={() => handleStarClick(el)}
                            className={clicked[el] && 'yellowStar'}
                            />
                        );
                        })
                    }
                </Stars>
                    <input type="text" onChange={handleText}  className='review-input'/>
                    <button type='submit' className='review-btn'>리뷰 작성</button>
                </form>
            </div>
        </div>
    );
}
 
export default Review;

const Stars = styled.div`
  display: flex;
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;