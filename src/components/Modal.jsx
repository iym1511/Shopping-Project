import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import '../css/Modal.css'
import useClick from "../hooks/useClick";

const Modal = ({setShowModal}) => {

    // setState를 전달해서 modal을 usehooks로 처리
    const mouseClick = useClick(setShowModal);

    const modalChange = () =>{
        setShowModal(false)
    }

    return (  
        <motion.div initial={{opacity: 0 ,transform : 'translateY(50px)', transition:'transform 0.33s ease'}}
        animate={{opacity: 1 ,transform : 'translateY(0px)', transition:'transform 0.33s ease'}}
        exit={{opacity: 0 ,transform : 'translateY(50px)', transition:'transform 0.33s ease'}} className="modal-box" ref={mouseClick}>
            <div className="modal-container">
                <p>선택하신 상품이 
                    <br /> 장바구니에 추가되었습니다.
                </p>
                <div className="modal-buttons">  {/* 창 사라지게 하기*/}
                    <button className="modal-button1" onClick={modalChange}>쇼핑 계속하기</button>
                    <Link to="/cart">
                        <button className="modal-button2">장바구니로 이동</button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

export default Modal;