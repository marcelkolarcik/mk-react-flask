import React, {useContext} from 'react';
import BookingContext from "../../store/booking-context";
import Card from 'react-bootstrap/Card';
import PriceFormater from "../ui/PriceFormater";
import DateFormater from "../ui/DateFormater";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router";
import GuestsForm from "../front/GuestsForm";
import DateFormPicker from "../ui/DateFromPicker";
import classes from './BookNow.module.css'

export default function BookingForm(props) {
    const room = props.room

    const bookingCtx = useContext(BookingContext)
    const newRoom = bookingCtx.country === ''
    const navigate = useNavigate();


    const correctDates = bookingCtx.startDate < bookingCtx.endDate

    function createBooking() {
        const booking = {
            country: bookingCtx.country || room.address.country,

            totalCost: bookingCtx.totalCost,

            startDate: bookingCtx.startDate,

            endDate: bookingCtx.endDate,

            numOfNights: bookingCtx.numOfNights,

            guests: bookingCtx.guests,

            roomName: bookingCtx.roomName,

            roomImage: bookingCtx.roomImage,
            bookedAt: new Date(),
            roomId: room._id,

        }
        bookingCtx.addBooking(booking);
        props.closeHandler();
        bookingCtx.clearCurrentBooking();
        navigate('/my-bookings');
    }

    return (
        <div>

            <Card className={'border-0'}>

                <Card.Body>
                    <Card.Text>
                        <strong>Country: </strong>{room.address.country}
                    </Card.Text>
                    <Card.Text>
                        <strong>Room: </strong>{room.name}
                    </Card.Text>
                    <Card.Text>
                        <strong>Room per night: </strong>
                        <PriceFormater price={room.price}/>

                    </Card.Text>
                    <Card.Text>
                        <strong>Guests: </strong>{bookingCtx.guests}
                        {bookingCtx.guests === room.accommodates &&
                        <span className={'mx-auto px-3 text-warning'}>max</span>}
                    </Card.Text>
                    {!newRoom ? '' : <GuestsForm maxGuests={room.accommodates}/>}

                    <Card.Text>
                        <strong>Nights: </strong>{correctDates && bookingCtx.numOfNights}
                    </Card.Text>

                    <strong>Dates: </strong>
                    {!newRoom ?
                        <div><DateFormater date={bookingCtx.startDate}/> - <DateFormater date={bookingCtx.endDate}/>
                        </div>
                        : <div className={' p-1 bg-secondary text-light d-flex justify-content-center'}>
                            <div>
                                <span className={'ps-2'}>Check-in</span>
                                <DateFormPicker date={'start'}/>
                            </div>
                            <div>
                                <span className={'ps-2'}>Check-out</span>
                                <DateFormPicker date={'end'}/>
                            </div>


                        </div>}
                    {!correctDates &&
                    <span className={'fw-bold p-1 text-warning'}>Check-in must be before check-out</span>}

                    <Card.Text>
                        <strong>Total cost: <PriceFormater price={correctDates && bookingCtx.totalCost}/> </strong>


                    </Card.Text>
                </Card.Body>
                <Card.Footer>

                    {(bookingCtx.numOfNights > 0 && bookingCtx.guests > 0 && correctDates) &&
                    <Button onClick={createBooking}
                            className={classes.book_now_btn + ' w-100'}>
                        Book Now!
                    </Button>}
                </Card.Footer>
            </Card>
        </div>
    );
}