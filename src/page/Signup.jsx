import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../css/Signup.css'
import useInput from '../hooks/useInput';
import {createUser, pushAddCart} from '../redux/singup';

const Signup = () => {

    const sign = useSelector((state) => state.signup);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, onChangeName] = useInput("");
    const [id, onChangeId] = useInput("");
    const [password, onChangePassword] = useInput("");
    const [email, onChangeEmail] = useInput("");
    const [address, onChangeAddress] = useInput("");
    const [phonNumber, onChangephonNumber] = useInput("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [passwordError, setPasswordError] = useState(false);

    

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
        address,
        phonNumber,
        item : [] // 장바구니 담기는 곳 
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
                {/* <div>Address</div>
                <input type="text" required value={address} onChange={onChangeAddress}/> */}
                <div>PhoneNumber</div>
                <input type="text" required value={phonNumber} onChange={onChangephonNumber}/>
                
                <button type="submit" className='signup-btn'>Sign up</button>
            </form>
        </div>
    );
}

export default Signup;