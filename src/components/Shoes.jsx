import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../css/Shoes.css'

const Shoes = () => {
    const shop = useSelector((state) => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (  
        <div className="shoes-box">
            <h1 className="shoes-title">SHOES</h1>
            
            <div className="shoes-wrapper">
                <section className="sec01"></section>
                <section className="sec02"></section>
                <section className="sec03"></section>
            </div>
            <div className="alternative">BEST 3 SHOES<div className='shoes-subtitle'>MADE</div></div>
            
                <div className="neat-mapbox">
                    {
                        shop.players.map((a, i)=> (
                            <div className="list-Container">                                    {/* index값을주면 map에서 0,1,2,3 페이지로감 */}
                                <img src={shop.players[i].image} alt="이미지없음" className="neat-mulgun" onClick={()=>{navigate(`/detailpage/${i}`)}}/>
                                <div className="neat-name">{a.name}</div>
                                    {/* map에서 i키값을 함수로보내줘서 위에서도 사용할수있게했음 중요 */}
                                <div className="neat-money">KRW {a.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                                <div className="listpage">
                                    {/* <button className="jjim" onClick={()=>jjim(i)}>찜하기</button> */}
                                </div>
                            </div>
                        ))
                    }
                </div>
        </div>
    );
}
 
export default Shoes;
