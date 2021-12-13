import React, {useContext} from 'react';
import BookingContext from "../../store/booking-context";

export default function GuestsForm(props) {
    const bookingCtx = useContext(BookingContext)

    return (
        <div className="row ">
            <div className="mx-auto mb-3 d-flex justify-content-center align-items-center">
                <button className={'btn btn-outline-secondary border border-3'}

                     onClick={() => {
                         bookingCtx.setGuests(1,props.maxGuests)
                     }}
                >
                    <span className={'fs-4'}>+</span>
                </button>
                <button

                    className={'btn btn-outline-secondary border border-3'}
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