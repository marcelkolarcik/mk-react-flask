import Button from "react-bootstrap/Button";
import React, {useContext, useState} from "react";
import BookingContext from "../../../store/booking-context";
import Offcanvas from 'react-bootstrap/Offcanvas';
import BookingForm from "./BookingForm";

export default function BookNow(props) {
    const bookingCtx = useContext(BookingContext)


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={'sticky-top'}>
            <Button variant="danger" onClick={handleShow}
                    className={'text-light text-decoration-underline fw-bold p-1 rounded-0'}>
                Book Now!
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className={'bg-black text-light w-100 text-center p-3'}>
                        Booking details</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {bookingCtx.country  ?
                        <BookingForm room={props.room} closeHandler={handleClose}/> :
                         <BookingForm room={props.room} closeHandler={handleClose} new={true}/>}
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );

}