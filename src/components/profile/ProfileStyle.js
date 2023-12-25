import styled from "styled-components";

export const ProfileWrap = styled.div`
    width: 400px;border: 1px solid #ddd;height: 700px;text-align: center;padding: 40px 0;box-sizing: border-box;border-radius: 5px;
    .img-box{
        width: 170px;height: 170px;border-radius: 50%;border: 1px solid #ddd;margin: auto;padding-top: 8px;box-sizing: border-box;margin-bottom: 30px;
        img {width: 150px;height: 150px;border: 1px solid #ddd;border-radius: 100%;}
    }
    .nickname {font-size: 24px;margin-bottom: 20px;}
    .info {
        span {display: block;font-size: 16px;}
    }
    .btn {margin: 30px 0;
        button {width: 320px;height: 60px;border-radius: 5px;border: 1px solid #e5e5e5;font-size: 16px;background-color: #2C5BF0;color: #fff;}
    }
    .disabled {text-align: left;text-indent: 40px;margin-top: 20px;font-size: 18px;color: #a7a7a7;}
`