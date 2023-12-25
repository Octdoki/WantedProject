import React from 'react';
import { PortfolioAddWrap } from './PortfolioListStyle';

import DatePickerBox from '../mypage/datePicker/DatePickerBox';
import Technology from './Technology';
import TechnologyTag from './TechnologyTag';

const PortfolioAdd = ({setIsOpen , isOpen}) => {

    const onSubmit = (e) => {
        e.preventDefault()
        
    }
    return (
        <PortfolioAddWrap>
            <div className={isOpen ? 'bg' : 'bg off'} onClick={()=>setIsOpen(false)} ></div>
            <form onSubmit={onSubmit}>
               <h2>포트폴리오</h2> 
               <h3>썸네일 선택</h3>
               <div className="con1">
                <p>
                    <input type="radio" name="" id="" />
                    <img src="/images/portImg/andro01.png" alt="" />
                </p>
                <p>
                    <input type="radio" name="" id="" />
                    <img src="/images/portImg/andro02.png" alt="" />
                </p>
                <p>
                    <input type="radio" name="" id="" />
                    <img src="/images/portImg/andro03.png" alt="" />
                </p>
                <p>
                    <input type="radio" name="" id="" />
                    <img src="/images/portImg/andro04.png" alt="" />
                </p>
                <p>
                    <input type="radio" name="" id="" />
                    <img src="/images/portImg/andro05.png" alt="" />
                </p>
                <p>
                    <input type="radio" name="" id="" />
                    <img src="/images/portImg/andro06.png" alt="" />
                </p>
                <p>
                    <input type="radio" name="" id="" />
                    <img src="/images/portImg/andro07.png" alt="" />
                </p>
               </div>
               <h3>프로젝트 명</h3>
               <div className="con2">
                <input type="text" name="" id="" placeholder='프로젝트 명을 입력하세요' />
               </div>
               <h3>프로젝트 기간</h3>
               <div className="con3">
                <DatePickerBox />
               </div>
               <h3>프로젝트 기술 스택</h3>
               <section className="con4">
                <Technology />
                <Technology />
                <TechnologyTag />
               </section>
               <h3>URL</h3>
               <div className="con5">
                <input type="text" name="url" placeholder='프로젝트를 확인할 수 있는 URL을 입력하세요(ex.http://www.xxx.com)' />
               </div>
               <h3>프로젝트 소개</h3>
               <div className="con6">
                <textarea name="" id="" cols="30" rows="10" placeholder='프로젝트를 소개해주세요'></textarea>
               </div>
               <p>
                    <button>등록</button>
                    <button onClick={()=>setIsOpen(false)}>취소</button>
               </p>
            </form>
        </PortfolioAddWrap>
    );
};

export default PortfolioAdd;