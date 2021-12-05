import React, {useContext} from "react";
import BookingContext from "../../../store/booking-context";
import PriceFormater from "../../ui/PriceFormater";

export default function CostPerTrip(props) {

    const bookingCtx = useContext(BookingContext)
    const room = props.room


    if (bookingCtx.numOfNights > 0) {
        return (
            <div>
                <p className="text-center bg-black text-light small pb-0 mb-0 mx-0">
                    <PriceFormater price={room.price * bookingCtx.numOfNights}/>
                    for your trip</p>

            </div>);
    } else {
        return '';
    }


}