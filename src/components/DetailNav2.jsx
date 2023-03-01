import { useSelector } from "react-redux";
import { useParams } from "react-router";

const DetailNav2 = () => {

    let {id} = useParams();
    const users = useSelector((state) => state.user);
    const sign = useSelector((state) => state.signup);
    // 현재 로그인한 유저랑 회원가입된 유저 찾아줌 / 댓글 이름별출력도 이걸로함
    const findUser = sign.userlist.find((user)=> user.id == users.id)

    return (  
        <div>진혜♥</div>
    );
}
 
export default DetailNav2;