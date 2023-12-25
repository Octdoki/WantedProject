import { careerData } from "../../assets/api/careerData";
import CareerItem from "../career/CareerItem";
import { Career } from "./ContentStyle";
import { Link, useNavigate } from "react-router-dom";
const Content4 = () => {
    const navigate = useNavigate()
    return (
        <Career>
            <div className="inner">
                <div className="tit-box">
                    <h2 className="tit">올폴리오 똑똑하게 이용하는법</h2>
                    <button onClick={() => navigate(`/career`)}>더보러가기</button>
                    {/* <Link to="/career">더보러가기</Link> */}
                </div>

                <ul>
                    { 
                        careerData.map((item, idx) => idx < 3 && <CareerItem key={item.id} item={item} /> ) 
                    }
                </ul>
            </div>
        </Career>
    );
};

export default Content4;