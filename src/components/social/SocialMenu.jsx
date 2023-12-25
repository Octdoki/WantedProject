import { useDispatch, useSelector } from "react-redux";
import { Menu } from "./SocialStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { onCate } from "../../store/modules/socialSlice";
import { changeLoc } from "../../store/modules/HomeSlice";

const SocialMenu = ({ changeCate }) => {
    const { socialData } = useSelector((state) => state.socialR);
    const { location } = useSelector((state) => state.HomeR);
    const [data, setData] = useState(socialData);

    const IsOn = (id) => {
        setData(data.map((item) => (item.id === id ? { ...item, isOn: true } : { ...item, isOn: false })));
    };

    const [loc, setLoc] = useState(location);
    useEffect(() => {
        dispatch(changeLoc("socialPage"));
    }, []);

    const dispatch = useDispatch();
    return (
        <>
            <Menu>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={7}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    navigation={true}
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <li
                                onClick={() => {
                                    if (item.category !== "전체") {
                                        dispatch(onCate(item.category));
                                    } else {
                                        // 전체를 클릭한 경우 모든 카테고리의 내용을 표시
                                        dispatch(onCate("전체")); // 또는 다른 특별한 값을 넣어도 됩니다.
                                    }
                                    IsOn(item.id);
                                }}
                                className={`tag ${item.isOn ? "on" : ""}`}
                            >
                                {item.category}
                            </li>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Menu>
        </>
    );
};

export default SocialMenu;
