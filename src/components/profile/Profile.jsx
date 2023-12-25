import { ProfileWrap } from "./ProfileStyle";


const Profile = () => {
    return (
        <ProfileWrap>
            <div className="img-box">
                <img src="/images/portImg/andro04.png" alt="" />
            </div>
            <p className="nickname">닉네임</p>
            <p className="info">
                <span>개발-프론트엔드 개발자</span>
                <span>경력 1년차</span>
            </p>
            <p className="btn">
                <button>프로필 편집</button>
            </p>
            <p className="disabled">로그아웃</p>
            <p className="disabled">회원탈퇴</p>
        </ProfileWrap>
    );
};

export default Profile;