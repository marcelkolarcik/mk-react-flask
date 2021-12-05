import classes from "../Front.module.css";
import React, {useContext, useState} from "react";
import SearchInput from "./SearchInput";
import DateFormPicker from "../../ui/DateFromPicker";
import BookingContext from "../../../store/booking-context";
import FormSelect from "react-bootstrap/FormSelect";
import GuestsForm from "./GuestsForm";

export default function SearchBar() {
    const [showLocation, setShowLocation] = useState(false);
    const [showGuests, setShowGuests] = useState(false);
    const bookingCtx = useContext(BookingContext)

    function showSearch() {
        setShowLocation(!showLocation)

    }

    function showGuestsForm() {
        setShowGuests(!showGuests)

    }

    return (
        <div>
            <div className={classes.search_bar}>
                <div className="d-md-flex justify-content-md-around ">
                    <div className={'col text-center ' + classes.search_bar_item}>

                        <strong className={'ms-2'}><small>Location</small></strong><br/>
                        <small className={'text-muted ms-2'}>Which country?</small>
                        <FormSelect aria-label="Default select example" className={'border-0 w-75 mx-auto bg-light'}
                                    onChange={(e) => {
                                        bookingCtx.setCountry(e.target.value)
                                    }}>
                            <option></option>

                            {['Australia', 'Brazil', 'Canada', 'China', 'Hong Kong', 'Portugal', 'Spain', 'Turkey', 'United States']
                                .map((country, idx) => (
                                    <option key={idx} value={country}
                                    >{country}</option>
                                ))}
                        </FormSelect>

                    </div>
                    <div className={'text-center  col ' + classes.search_bar_item}>
                        <strong><small>Check in</small></strong><br/>
                        <small className={'text-muted'}>Add dates</small>
                        <DateFormPicker date={'start'}/>
                    </div>
                    <div className={'text-center col ' + classes.search_bar_item}>
                        <strong><small>Check out</small></strong><br/>
                        <small className={'text-muted'}>Add dates</small>
                        <DateFormPicker date={'end'}/>
                    </div>
                    <div className={'text-center col ' + classes.search_bar_item}>
                        <span onClick={showGuestsForm}>
                             <strong><small>Guests</small></strong><br/>
                        <small className={'text-muted'}>Add guests</small>
                             <br/>
                        <small>{bookingCtx.guests} guests</small>
                        </span>

                        {showGuests && <GuestsForm/>}
                    </div>

                </div>
                {bookingCtx.endDate < bookingCtx.startDate &&
                <p className={'text-center px-5'}>check-out date must be > check-in date!</p>}
                {(bookingCtx.numOfNights && bookingCtx.country && bookingCtx.guests > 0
                    && bookingCtx.endDate > bookingCtx.startDate) && <SearchInput/>}
            </div>


        </div>


    );
}