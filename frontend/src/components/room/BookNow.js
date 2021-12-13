import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import BookingForm from "./BookingForm";
import classes from './BookNow.module.css'

export default function BookNow(props) {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={'sticky-top'}>
            <Button

                onClick={handleShow}
                className={classes.book_now_btn}>
                Book Now!
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className={'bg-black text-light w-100 text-center p-3'}>
                        Booking details</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <BookingForm room={props.room} closeHandler={handleClose}/>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );

}