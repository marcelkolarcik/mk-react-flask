import React, {useContext} from 'react';
import BookingContext from "../../store/booking-context";

export default function GuestsForm(props) {
    const bookingCtx = useContext(BookingContext)

    return (
        <div className="row ">
            <div className="mx-auto mb-3 d-flex justify-content-evenly align-items-center">
                <button className={'text-secondary border border-secondary border-3 rounded-circle'}
                         style={{width:'40px',height:'40px'}}
                     onClick={() => {
                         bookingCtx.setGuests(1,props.maxGuests)
                     }}
                >
                    <span className={'fs-4'}>+</span>
                </button>
                <button
                    style={{width:'40px',height:'40px'}}
                    className={'text-danger border border-danger border-3 rounded-circle'}
                     onClick={() => {
                         bookingCtx.setGuests(-1)
                     }}
                >
                    <span className={'fs-4'}>-</span>

                </button>

            </div>
        </div>
    );
}