import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import '../css/Modal.css'

const Modal = ({setShowModal}) => {

    const modalChange = () =>{
        setShowModal(false)
    }

    // 모달 외부 클릭시 끄기 처리
    // Modal 창을 useRef로 취득
    const modalRef = useRef(null);
    
    useEffect(() => {
        // 이벤트 핸들러 함수
        const handler = (event) => {
            // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowModal(false);
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
        <div className="modal-box" ref={modalRef}>
            <div>
                <p>선택하신 상품이 
                    <br /> 장바구니에 추가되었습니다.
                </p>
                <div>  {/* 창 사라지게 하기*/}
                    <button onClick={modalChange}>쇼핑 계속하기</button>
                    <Link to="/cart">
                        <button>장바구니로 이동</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default Modal;