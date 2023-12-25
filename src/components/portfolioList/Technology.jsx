import React from 'react';
import { technologyData } from '../../assets/api/mypageData';
import TechnologyItem from './TechnologyItem';
import { IoIosArrowDown } from "react-icons/io";
import { TechnologyWrap } from './PortfolioListStyle';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TechnologyTag from './TechnologyTag';
import { useEffect } from 'react';

const Technology = () => {
    const {technologyData} = useSelector(state => state.mypage)
    const [isOpen, setIsOpen] = useState(false)
    const onClick = e => {
        e.preventDefault()
        setIsOpen(!isOpen)
    }

    
    return (
        <TechnologyWrap>
            <button onClick={onClick}>
                주요 기술 스택
                <i>
                    <IoIosArrowDown />
                </i>
            </button>
            {
                isOpen ? <ul className='selectBox'>
                {technologyData.map(item => <TechnologyItem key={item.id} item={item} />)}
                </ul> : null
            } 
            {/* 기술 스택 선택할 창 생성 */}
                
        </TechnologyWrap>
    );
};

export default Technology;