import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../css/Neat.css'
import { shopcartAdd, shopdeleteCount } from "../redux/main";
import { cartAdd } from "../redux/shop";
import Recent from "./Recent";
// import Pagination from "react-js-pagination";

let recentPush = []

const Neat = () => {
    const shop = useSelector((state) => state)
    const users = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 검색기능 State
    const [searched, setSearched] = useState("");
    const [search, setSearch] = useState("");

    // 검색기능 함수
    const searchChange = (e) => {
        e.preventDefault();
        setSearched(search);
    }

    // 검색 기능
    const filterShop = shop.players.filter((a)=>{
        return a.name.replace(" ","").toLocaleLowerCase().includes(searched.toLocaleLowerCase().replace(" ",""))
    })
    



    const recent = (i) => {
        const findRecent = recentPush.find((a)=> a.id == i.id)
        if(!findRecent){
            let recentPlus = recentPush.concat(i)
            recentPush = recentPlus
            let sesstionRecent = JSON.stringify(recentPush);
            sessionStorage.setItem("recent", sesstionRecent);
        }
    }



    
    // 장바구니 기능 추가할려면 리덕스 따로만들어서 홈에서 찜하기누르는거따로 담기는거따로 해줘야함
    // 그래서 홈에서 장바구니redux 리듀서를 가져와서 사용해주면 장바구니에 추가됨

    // const jjim = (i) => {
    //     dispatch(shopcartAdd(
    //         {
    //             id: shop.players[i].id,
    //             name: shop.players[i].name,
    //             count: shop.players[i].count,
    //             image: shop.players[i].image,
    //             money: shop.players[i].money,
    //             save : shop.players[i].save,
    //             checked : shop.players[i].checked
    //         }
    //     ))
    // }
             
    //     <div className="neat-mapbox">  원래 쓰던거
    //     {
    //         shop.players.map((a, i)=> (
    //             <div className="list-Container">                                    {/* index값을주면 map에서 0,1,2,3 페이지로감 */}
    //                 <img src={shop.players[i].image} alt="이미지없음" className="neat-mulgun" onClick={()=>{navigate(`/detailpage/${i}`)}}/>
    //                 <div className="neat-name">{a.name}</div>
    //                     {/* map에서 i키값을 함수로보내줘서 위에서도 사용할수있게했음 중요 */}
    //                 <div className="neat-money">KRW {a.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
    //                 <div className="listpage">
    //                     {/* <button className="jjim" onClick={()=>jjim(i)}>찜하기</button> */}
    //                 </div>
    //             </div>
    //         ))
    //     }
    // </div>

    return (
        <div className="home-box">
        <h1 className="home-bestTitle">BEST 3</h1>
         <div className="shoes-wrapper">
                <section className="sec01" onClick={()=>{navigate('/detailpage/9')}}></section>
                <section className="sec02" onClick={()=>{navigate('/detailpage/6')}}></section>
                <section className="sec03" onClick={()=>{navigate('/detailpage/8')}}></section>
            </div>
            <div className="home-titleBox">
            <h1 className="home-title">NEAT</h1>
        </div>
         <form onSubmit={searchChange}>
            <input type="text" className="neat-input" onChange={(e)=>{setSearch(e.target.value)}} />
            <img src={require("../img/neat-input.png")} className="neat-icon"/>
         </form>
         <div className="neat-mapbox">
            {
                filterShop.map((a,i)=>(
                    <div className="list-Container">                                    {/* index값을주면 map에서 0,1,2,3 페이지로감 */}
                            <img src={filterShop[i].image} alt="이미지없음" className="neat-mulgun" onClick={()=>{navigate(`/detailpage/${filterShop[i].id}`)
                            recent(a)}}/>
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

            <Recent />
    {/* <div className="neat-recent-mapbox">
        <div className="neat-recentTitle">최근 본 상품</div>
         {  
            ssesstionRecent != undefined  ? (
                RecentJSON.map((a,i)=>(
                    <div className="neat-recent" key={i}>
                        <img src={a.image} className="neat-recentImg" onClick={()=>{navigate(`/detailpage/${a.id}`)}}/>
                        <div className="neat-recentName">{a.name}</div>
                    </div>
                ))
            ) : (
                <div>최근본거없음</div>
            )
        }
    </div> */}
        
        </div>
    );
}

export default Neat;



