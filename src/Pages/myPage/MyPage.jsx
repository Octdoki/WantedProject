import React from 'react';
import { MypageWrap } from './mypageStyle';
import Profile from '../../components/profile/Profile';
import Portfolio from './portfolio/Portfolio';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import { useState } from 'react';

const MyPage = () => {
    const navigate = useNavigate()
    const [isTrue, setIsTrue] = useState(false)
    const onToggle = ()=>{
        setIsTrue(!isTrue)
    }
    return (
        <>
            <MypageWrap>
                <div className="inner">
                    <article>
                        <Profile />
                    </article>
                    <article className='mypage-main'>
                        <ul className="tab-menu">
                            <li className='on' onClick={onToggle}>
                                <Link to="portfolio">포트폴리오</Link>
                            </li>
                            {/* <li>
                                <Link to="like">좋아요</Link> 
                            </li>
                            <li>
                                <Link to="follow">내활동</Link>
                            </li> */}
                        </ul>
                        <div className="line"></div>
                        <div className="content">
                            <Outlet />  
                        </div>
                    </article>
                </div>
            </MypageWrap>
        </>
    );
};

export default MyPage;