import React, {useContext} from 'react';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import BookingContext from "../../store/booking-context";

export default function SearchInput() {

    const bookingCtx = useContext(BookingContext)
    const navigate = useNavigate();

    function performSearch() {
        navigate('search/' + bookingCtx.country + '/')
    }


    return (
        <Row>

            <Col md={6} className={'mx-auto mb-3'}>

                <div className="d-grid gap-2 px-3">
                    <Button variant="secondary" size="lg" onClick={performSearch}>
                        Search
                    </Button>
                </div>
            </Col>
        </Row>
    );
}