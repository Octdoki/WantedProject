import { useSelector } from 'react-redux';
import { SocialContent, SocialDetailWrap, SocialTitle } from './SocialStyle';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const SocialDetail = () => {
    const { socialID } = useParams();
    const { socialData } = useSelector((state) => state.socialR);
    const detailItem = socialData.find((item) => item.id === Number(socialID));
    const {
        title,
        nick,
        category,
        detail: [
            {
                img1,
                img2,
                img3,
                desc: [{ desctitle1, descQ1, descA1, desctitle2, descQ2, descA2 }],
            },
        ],
    } = detailItem;

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <SocialDetailWrap>
            <SocialTitle>
                <p>개발자 인터뷰</p>
                <h1>{title}</h1>
                <div>
                    <span>{nick}</span>
                    <span>{category}</span>
                </div>
            </SocialTitle>

            <SocialContent>
                    <img src={img1} alt="" />
                    <h3>{desctitle1}</h3>
                    <article>
                        <h2>{descQ1}</h2>
                        <p>{descA1}</p>
                    </article>

                    <h3>{desctitle2}</h3>
                    <img src={img2} alt="" />
                    <article>
                        <h2>{descQ2}</h2>
                        <p>{descA2}</p>
                    </article>
            </SocialContent>

            <p className="btn">
                <button onClick={() => navigate(`/social`)}>목록</button>
            </p>
        </SocialDetailWrap>
    );
};

export default SocialDetail;
