
import { IoShareSocial } from "react-icons/io5";
import { GoArrowUp } from "react-icons/go";
import { CareerConWrap } from "./CareerConStyle";
import { useNavigate } from "react-router-dom";

const CarerrCon = ({item}) => {
    const navigate = useNavigate()
    const {thumImg, title, popCate, startDate, lastDate } = item
    const ontop =()=>{
        window.scrollTo(0, 0);
    }
    const onGo =()=>{
        navigate('/complete')
    }
    return (
        <CareerConWrap>
            <div className='title'>
                {title}
            </div>
            <div className='con1'>
                <p>
                    <img src= {thumImg }alt=''/>
                </p>
                <div className='con1Content'>
                    <p className="popCate">{popCate} </p>
                    <strong>{title}</strong>
                    <p className="date">{startDate} (화) -  {lastDate} (금) </p>
                    {/* 텍스트 임의로 넣음  */}
                    <p className="content">우리는 규모 있는 회사에서 멋진 프로젝트로 성과를 내고 외부 활동도 활발하게 하는, 그야말로 ‘잘 나가는’ 사람을 콘텐츠 미디어에서 자주 봅니다. </p>
                    <div className="part on" onClick={onGo}>참가 신청</div>
                </div>
            </div>
            <div className="con2">
                <p>
                <img src= {thumImg }alt=''/>
                </p>
             
                
            </div>
            <div className='btnwrap'>
                <div className="share"><IoShareSocial /></div>
                <div className="line"></div>
                <div className="top" onClick={ontop}><GoArrowUp /></div>
            </div>
        </CareerConWrap>
    );
};

export default CarerrCon;