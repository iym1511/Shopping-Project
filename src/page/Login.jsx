import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'
import { add } from '../redux/singup';
import { loginUser } from '../redux/user';

const Login = () => {

  const sign = useSelector((state) => state.signup);
  const user = useSelector((state)=> state.user)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 이메일,패스워드 조건이 충족하는지 확인용
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  // useEffect로 한자한자입력할때마다 확인해서 
  // 이메일,패스워드 두개의 조건이 충족하면
  // 버튼을 활성화 시켜주는데 사용
  const [notAllow, setNotAllow] = useState(true);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };


  const clicksignup = () => {
    navigate("/signup");
  }

    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(sign)
        const findUser = sign.userlist.find((user) => user.id === id && user.password === password);
      
        // const logfindUser = user.find((log)=> log.id === user .id)

        if (!findUser) {
          alert("로그인 실패");
          console.log(findUser.name)
        } else {
          dispatch(
            loginUser({
              name: findUser.name,
              id: findUser.id,
              email: findUser.email,
              address: findUser.address,
              zonecode : findUser.zonecode,
              phoneNumber : findUser.phonNumber,
              detailAddress: findUser.detailAddress,
              delComment : findUser.delComment,
              comment : findUser.comment,
              isLoggedIn: true,
              item :findUser.item, // 장바구니 Signup 에서도 들어가는거 확인 했음
              pid: findUser.pid 
            }),
          );
          console.log(findUser)
          navigate("/");
        }
      };

      

    return (  
        <div className='login-box'>
            <h1 className="login-text">로그인페이지</h1>
            <form onSubmit={onSubmitForm} className="login-form">
                <div>ID</div>
                <input type="text" onChange={onChangeId}/>     
                <div>PW</div>
                <input type="password" onChange={onChangePassword}/>                
                <button className='login-btn' type='submit'>로그인</button>
            </form>
            <button onClick={clicksignup}>회원가입</button>
        </div>
    );
}
 
export default Login;