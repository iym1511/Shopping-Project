import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../css/Signup.css'
import useInput from '../hooks/useInput';
import {ADDIT_USER, createUser, pushAddCart, updateAddress} from '../redux/singup';
import DaumPostcode from 'react-daum-postcode';

const Signup = () => {

    const sign = useSelector((state) => state.signup);
    const users = useSelector((state)=> state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, onChangeName] = useInput("");
    const [id, onChangeId] = useInput("");
    const [password, onChangePassword] = useInput("");
    const [email, onChangeEmail] = useInput("");
    // const [address, onChangeAddress] = useInput("");
    const [phonNumber, onChangephonNumber] = useInput("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [passwordError, setPasswordError] = useState(false);

    // 주소 api
    const [openPostcode, setOpenPostcode] = useState(false);
    const [apiaddress, setApiaddress] = useState("");
    const [apizonecode, setApizoneCode] = useState("");

    const findUsers = sign.userlist.find((user)=> user.id == users.id)

    const onChangePasswordCheck = useCallback(
        (e) => {
          setPasswordCheck(e.target.value);
          setPasswordError(e.target.value !== password);
        },
        [password]
      );
    
      let user = {
        name,
        id,
        password,
        email,
        // address,
        apiaddress,
        apizonecode,
        phonNumber,
        item : [], // 장바구니 담기는 곳 
        pid : []
      };
    
      const findUser = sign.userlist.find(
        (signup) => sign.id === id || signup.email === email
      );
    
      const onSubmitForm = (e) => {
        e.preventDefault();
        if (password !== passwordCheck) {
          alert("비밀번호 불일치");
          return setPasswordError(true);
        }
        if (!findUser) {
          console.log(sign)
          dispatch(createUser(user));
          navigate("/login");
          alert("회원가입 완료.")
        }
        // 이미 가입된 id / email이 있다면 회원가입 실패
        else if (id === findUser.id) {
          alert("이미 사용중인 아이디입니다.");
        } else if (email === findUser.email) {
          alert("이미 사용중인 email입니다.");
        }
      };


      // 세션으로 주소 불러오기
    const sesstionAddress = sessionStorage.getItem("address");
    const sesstionZonecode = sessionStorage.getItem("zonecode");

       // 사용자 배송지 정보
    const [address, setAddress] = useState(findUsers.apiaddress);
    const [zonecode, setZonecode] = useState(findUsers.apizonecode)
    const [detailAddress, setDetailAddress] = useState(findUsers.detailAddress);

    const onChangeAddress = (e) => {
        setAddress(e.target.value)
    }
    const onChangeZonecode = (e) => {
        setZonecode(e.target.value)
    }

    // 모달 외부 클릭시 끄기 처리---------------
    // Modal 창을 useRef로 취득
    const modalRef = useRef(null);
    
    useEffect(() => {
        // 이벤트 핸들러 함수
        const handler = (event) => {
            // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setOpenPostcode(false);
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
    // ---------------------------



    const handle = {
        // 버튼클릭 이벤트
        clickButton: (e) => {
            e.preventDefault() // api할때 이런오류 다반사 프리벤트 쓰자
            setOpenPostcode((current)=> !current);
        },
        // 주소 선택 이벤트
        selectAddress: (data) => {
            console.log(`
                주소: ${data.address},
                우편번호: ${data.zonecode}
            `)
            setApiaddress(data.address);
            setApizoneCode(data.zonecode);
            sessionStorage.setItem("address", data.address)
            sessionStorage.setItem("zonecode", data.zonecode)
            setOpenPostcode(false);
            console.log(sesstionAddress)
            console.log(sesstionZonecode)

        },
    }

      const deliveryAddress = (e) => {
        dispatch(ADDIT_USER({
            ...findUser,
            apiaddress,
            apizonecode,
            detailAddress,
        })
        );
        dispatch(updateAddress({
            ...users,
            apiaddress,
            apizonecode,
            detailAddress,
        })
        );
        console.log(users)
        console.log(findUser)
        console.log(sign)
        alert("배송지 저장 완료")
    }

    

    return (   // value = key값 상태가 바뀌었을때 같이 바뀜
        <div className='signup-box'>
            <h1 className='signup-title'>회원가입</h1>
            <form className='signup-formbox' onSubmit={onSubmitForm}>
                <div>Name</div>
                <input type="text" required value={name} onChange={onChangeName}/>
                <div>ID</div>
                <input type="text" required value={id} onChange={onChangeId} />  
                <div>Password</div>
                <input type="password" required value={password} onChange={onChangePassword} />
                <div>Password Check</div>
                <input type="password" required value={passwordCheck} onChange={onChangePasswordCheck} />
                {passwordError && <p>Password가 일치하지 않습니다.</p>}
                <div>Email</div>
                <input type="text" required value={email} onChange={onChangeEmail} />
                <div>PhoneNumber</div>
                <input type="text" required value={phonNumber} onChange={onChangephonNumber}/>
                
                <label>주소</label>
                        <div className="mypage-addressContainer">
                            <input type="text" placeholder="우편번호"  value={apizonecode ? sesstionZonecode : zonecode} onChange={onChangeZonecode} className="mypage-addressNum" disabled/> 
                            <button onClick={handle.clickButton} className="mypage-apibtn">주소 검색</button>
                        </div>
                        <input type="text" placeholder="기본주소" value={apiaddress ? sesstionAddress : address} onChange={onChangeAddress} disabled className="mypage-address"/>
                        <input type="text" placeholder="나머지 주소" value={detailAddress || ""} onChange={(e)=>{setDetailAddress(e.target.value)}} className="mypage-address"/>
            

                <button type="submit" className='signup-btn' onClick={deliveryAddress}>Sign up</button>
            </form>


            <div className={`mypage-apiModal ${openPostcode ? 'mypage-apiModalbod' : ''}`} ref={modalRef}>
                    {
                        openPostcode && 
                            <DaumPostcode className="mypage-api"
                                onComplete={handle.selectAddress}  // 값을 선택할 경우 실행되는 이벤트
                                autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
                                defaultQuery='판교역로 235' // 팝업을 열때 기본적으로 입력되는 검색어 
                            />
                    }
                </div>
        </div>
    );
}

export default Signup;