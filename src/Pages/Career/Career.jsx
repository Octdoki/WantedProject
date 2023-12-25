import { Swiper, SwiperSlide } from 'swiper/react';  
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {  Pagination } from 'swiper/modules';
import { useEffect, useState } from "react";
import { CareerGallery, CareerTab, SubVisWrap } from "./CareerStyle";
import { RiEqualizerLine } from "react-icons/ri";
import CareerItem from '../../components/career/CareerItem';
import { useDispatch, useSelector } from 'react-redux';
import { onTab } from '../../store/modules/CareerSlice';
import { changeLoc } from '../../store/modules/HomeSlice';
import PopupCate from '../Popup/PopupCate';

const Career = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    const [isOpen , setIsopen] = useState(false)
    const { careerData,careerCateData } = useSelector(state => state.CareerR)
    const { location } = useSelector(state => state.HomeR)
    const [ data, setData ] = useState(careerCateData)
    const dispatch  = useDispatch()
    const IsOn = (id) => {
        setData( data.map( item => item.id === id ? {...item, isOn : true}  : {...item,isOn:false}))
    }
    const [loc, setLoc] = useState(location)
    useEffect(()=>{
        dispatch(changeLoc('careerPage'))
    },[])
    
    const openPopup=()=>[
        setIsopen(true)
    ]

    return (
        <>
            <div className="inner">
                <SubVisWrap>
                    <Swiper
                        modules={[Autoplay,Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        loop={true}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide><img src="./images/careerImg/subVis01.webp" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="./images/careerImg/subVis02.webp" alt="" /></SwiperSlide>
                    </Swiper>
                </SubVisWrap>

                <CareerTab>
                    <ul>
                        {
                            data.map(item=>  <li onClick={() => dispatch(onTab(item.tabCate))} key={item.id}>
                                <span className={`${ item.isOn ? 'on' : '' }`} onClick={() => IsOn(item.id)}>
                                {item.tabCate}
                                </span>
                            </li> )
                        }
                    </ul>
                    
                    <button onClick={openPopup}>
                        <RiEqualizerLine />
                    </button>
                </CareerTab>

                <CareerGallery>
                    { 
                        careerData.map(item => <CareerItem key={item.id} item={item} /> ) 
                    }
                </CareerGallery>
            </div>
            { isOpen && <PopupCate setIsopen={setIsopen} /> }
        </>
    );
};

export default Career;