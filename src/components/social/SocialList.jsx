import { useSelector } from "react-redux";
import { SocialListWrap } from "./SocialStyle";
import SocialItem from "./SocialItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SocialList = () => {
    const { socialData } = useSelector((state) => state.socialR);
    const [selectedCate, setselectedCate] = useState("전체");
    const navigate = useNavigate();
    return (
        <SocialListWrap>
            {socialData
                
                .map(
                    (item) =>
                        (item.category === selectedCate || selectedCate === "전체") && (
                            <SocialItem key={item.id} item={item} />
                        )
                )}
        </SocialListWrap>
    );
};

export default SocialList;
