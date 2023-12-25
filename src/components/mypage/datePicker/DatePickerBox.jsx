import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { DatePickerWrap } from "./DatePickerStyle";
import { IoIosArrowDown } from "react-icons/io";

const DatePickerBox = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <DatePickerWrap>
            <div>
                <DatePicker className="calender" dateFormat="yyyy년 mm월 dd일" selected={startDate} onChange={date => setStartDate(date)} minDate={new Date()} />
                <i>
                    <IoIosArrowDown />
                </i>
            </div>
            <div>
                <DatePicker className="calender" dateFormat="yyyy년 mm월 dd일" selected={endDate} onChange={date => setEndDate(date)} />
                <i>
                    <IoIosArrowDown />
                </i>
            </div>
        </DatePickerWrap>
    );
};

export default DatePickerBox;