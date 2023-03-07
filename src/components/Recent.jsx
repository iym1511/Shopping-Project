import { useNavigate } from 'react-router-dom';
import '../css/Recent.css';

const Recent = () => {

    const navigate = useNavigate()

    // 세션에저장한 최근눌렀던 상품 가져옴
    const ssesstionRecent = sessionStorage.getItem("recent")  
    const RecentJSON = JSON.parse(ssesstionRecent)

    return (  
        <div>
            <div className="recent-recent-mapbox">
                <div className="recent-recentTitle">최근 본 상품</div>
                {  
                    ssesstionRecent != undefined  ? (
                        RecentJSON.map((a,i)=>(
                            <div className="recent-recent" key={i}>
                                <img src={a.image} className="recent-recentImg" onClick={()=>{navigate(`/detailpage/${a.id}`)}}/>
                                <div className="recent-recentName">{a.name}</div>
                            </div>
                        ))
                    ) : (
                        <div>최근본거없음</div>
                    )
                }
            </div>
        </div>
    );
}

export default Recent;
