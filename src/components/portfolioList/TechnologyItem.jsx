import { useDispatch } from "react-redux";
import { onSelect } from "../../store/modules/mypageSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";


const TechnologyItem = ({item}) => {
    const {technologyData} = useSelector(state => state.mypage)
    const {id, isOn, technology} = technologyData
    const dispatch = useDispatch()
    
    useEffect(()=>{
       
    },[technologyData])
    return (
        <li className={item.isOn && 'on'}>
            {item.technology}
        </li>
    );
};

export default TechnologyItem;