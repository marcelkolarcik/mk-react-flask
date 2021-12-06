import React, {forwardRef, useContext, useEffect, useState} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import BookingContext from "../../store/booking-context";

export default function DateFormPicker(props) {
    const bookingCtx = useContext(BookingContext)
    const [date, setDate] = useState(new Date());

    const ExampleCustomInput = forwardRef(({value, onClick}, ref) => (
        <button className="btn " onClick={onClick} ref={ref}>
            {value}
        </button>
    ));

    useEffect(() => {
        props.date === 'start' ? bookingCtx.setStartDate(date) : bookingCtx.setEndDate(date)
        bookingCtx.setNumOfNights(bookingCtx.startDate, bookingCtx.endDate)
    },[bookingCtx,props.date,date])


    return (
        <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            customInput={<ExampleCustomInput/>}
        />
    );

}