import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Data} from './style/calendar'

const Calendar= () => {
    const [startDate, setStartDate] = useState(new Date())
    return (
        <Data>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat='dd.MM.yyyy'
            />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 11H7V13H9V11ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z" fill="#4A56E2"/>
            </svg>
        </Data>

    );
};
export default Calendar