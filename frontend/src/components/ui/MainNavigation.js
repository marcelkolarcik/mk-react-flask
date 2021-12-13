import {Link} from "react-router-dom";
import React, {useContext} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../auth/firebase";
import BookingContext from "../../store/booking-context";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function MainNavigation() {
    const [user] = useAuthState(auth);
    const bookingCtx = useContext(BookingContext)
    return (
        <Navbar collapseOnSelect expand="md" bg="black" variant="dark">
            <Container>
                <Navbar.Brand><Link className='mx-3 nav-link text-light fw-bold' to={'/'}>Demo
                    Airbnb</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='mx-3 nav-link text-light ' to={'/'}>Places to stay</Link>
                        <Link className='mx-3 nav-link text-light ' to={'/map'}>Map</Link>

                        {bookingCtx.totalBookings ? <Link className='mx-3 nav-link text-light ' to={'/my-bookings'}>
                                My bookings {bookingCtx.totalBookings}</Link> :
                            ''}


                    </Nav>
                    <Nav>

                        {user ?
                            <Link className='ms-auto mx-3 nav-link text-light fw-bold'
                                  to={'/dashboard'}>Dashboard</Link> :
                            <Link className='ms-auto mx-3 nav-link text-light fw-bold' to={'/login'}>Become a
                                host</Link>}


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <div className='d-flex justify-content-center  bg-black '>
        //     <Link className='mx-3 nav-link text-light fw-bold' to={'/'}>Demo App</Link>
        //     <Link className='mx-3 nav-link text-light ' to={'/'}>Places to stay</Link>
        //     {bookingCtx.totalBookings ?  <Link className='mx-3 nav-link text-light ' to={'/my-bookings'}>
        //             My bookings {bookingCtx.totalBookings}</Link> :
        //      ''}
        //
        //     {user ?
        //         <Link className='ms-auto mx-3 nav-link text-light fw-bold' to={'/dashboard'}>Dashboard</Link> :
        //         <Link className='ms-auto mx-3 nav-link text-light fw-bold' to={'/login'}>Become a host</Link>}
        //
        //
        //
        //
        // </div>
    );
}