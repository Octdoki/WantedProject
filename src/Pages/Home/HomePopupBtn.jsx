import { MainPopup , MainContentWrapper, MainPopupWrap} from './HomePopupStyle';
import { FaHeart, FaCommentAlt, FaCommentDots, FaPlus, FaShare } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react';
import { changecommnet, changeFollow, changeLikes } from '../../store/modules/PopupHomeSlice';
import { FaCheck } from "react-icons/fa6";
const HomePopupBtn = ({move, item }) => {
    const { isliked, isfollow  } = useSelector( state => state.popupHome)
    const { gallery2 } = useSelector( state => state.galleryR )
    const dispatch = useDispatch()
    const {id,likes} = item
    const [cnt, setCnt] = useState(likes)
    
    const onClickLike = (item)=>{
        dispatch(changeLikes(item))
        if(isliked) {
            setCnt(cnt+1)
        }
    }
    return (
        
        <div className="MainPopupBtnWrap">
            <p>
                <img src={ gallery2[id-1].largeImageURL } alt="" />
                <span>프로필</span>
            </p>
            <p>
                <button onClick={()=>dispatch(changecommnet())}> <FaCommentAlt /> </button>
                <span>댓글</span>
            </p>

            <p className='likes' onClick={()=>onClickLike(item)} >
                <button  className={isliked ? "on" : ""}><FaHeart /></button>
                <span>좋아요</span>
            </p>
            
            <p className='collection'>
                <button onClick={()=>dispatch(changeFollow(item))}>   {isfollow?<FaCheck />  : <FaPlus /> }  </button>
                <span>팔로우</span>
            </p>

            <p className='collection'>
            <button> <FaShare /></button>
                <span>공유하기</span>
            </p>
        
        </div>
    );
};

export default HomePopupBtn;