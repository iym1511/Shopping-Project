import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const DetailNav = () => {

    const users = useSelector((state) => state.user);
    const sign = useSelector((state) => state.signup);
    // 현재 로그인한 유저랑 회원가입된 유저 찾아줌 / 댓글 이름별출력도 이걸로함
    const findUser = sign.userlist.find((user)=> user.id == users.id)

    return (  
        <div>
            <h2>일윤잉</h2>
        </div>
    );
}
 
export default DetailNav;