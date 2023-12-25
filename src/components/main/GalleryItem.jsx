import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
import PopupHome from "../../Pages/Popup/PopupHome";

const GalleryItem = ({item }) => {
    const { category, id ,title,likes, name} = item
    const [isOpen , setIsopen] = useState(false)
    const dispatch = useDispatch()
    const { gallery1, gallery2 ,loading } = useSelector( state => state.galleryR )
    const openPopup=()=>[
        setIsopen(true)
    ]
    return (
       <>
        {
            !loading && gallery1 && gallery2 && <li onClick={ openPopup }>
            <a href="#">
                <img src={gallery1[id-1].webformatURL} />
            </a>
            <span className="cateName">{category}</span>
            <p>{title}</p>
            <div>
                <p className="thum">
                    <img src={gallery2[id-1].largeImageURL} alt="" />
                    <span>{name}</span>
                </p>
                <i><FaHeart /><span>{likes}</span></i>
            </div>
        </li>
        }
        { isOpen && <PopupHome setIsopen={setIsopen} item={item}/> }
       </>
    );
};
export default GalleryItem;