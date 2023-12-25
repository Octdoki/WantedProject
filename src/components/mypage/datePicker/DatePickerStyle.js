import styled from "styled-components";

export const DatePickerWrap = styled.div`
    display: flex;justify-content: space-between;
    > div {
        position: relative;
        .calender {
            width: 630px;height: 60px;font-size: 16px;color: #6e6e6e;border: none;border-bottom: 1px solid #ddd;text-indent: 5px;
        }
        i {position: absolute; right: 20px;top: 50%;transform:translateY(-50%);font-size: 20px;}
    }
`