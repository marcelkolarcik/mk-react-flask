import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import React, {useContext} from "react";
import BookingContext from "../store/booking-context";
import DateFormater from "../components/ui/DateFormater";
import PriceFormater from "../components/ui/PriceFormater";
import {Link} from 'react-router-dom';

export default function Bookings() {
    const bookingCtx = useContext(BookingContext)

    return (
        <Container>
            <h1 className={'text-center'}>My bookings</h1>
            <Row>
                {bookingCtx.bookings.map((booking,idx) => (
                    <Col key={idx} sm={12} className={'shadow mb-3 p-3'}>
                        <Row>
                            <Col sm={3}>
                                <img className={'img-thumbnail border-0 shadow-lg'} src={booking.roomImage} alt=""/>
                                <p className="small text-center p-0 m-0">
                                    Booked at: <br/> <DateFormater date={booking.bookedAt}/>

                                </p>
                            </Col>
                            <Col sm={9}>
                                <p className="small p-0 m-0">Country: {booking.country}</p>
                                <p className="small p-0 m-0">Room: {booking.roomName}</p>
                                <p className="small p-0 m-0">Dates:
                                    <DateFormater date={booking.startDate}/>
                                    - <DateFormater date={booking.endDate}/></p>
                                <p className="small p-0 m-0">Num of nights: {booking.numOfNights}</p>
                                <p className="small p-0 m-0">Guests: {booking.guests}</p>
                                <p className="small p-0 m-0">Total Cost: <PriceFormater price={booking.totalCost}/></p>
                                <p className={'text-end'}>
                                    <Link to={'/room/'+booking.roomId}>Room page</Link>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                ))}
            </Row>
        </Container>

    );
}