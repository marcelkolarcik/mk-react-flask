import {Link} from "react-router-dom";
import React ,{useContext} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase";
import BookingContext from "../../store/booking-context";

export default function MainNavigation() {
    const [user] = useAuthState(auth);
    const bookingCtx = useContext(BookingContext)
    return (
        <div className='d-flex justify-content-center  bg-black '>
            <Link className='mx-3 nav-link text-light fw-bold' to={'/'}>Demo App</Link>
            <Link className='mx-3 nav-link text-light ' to={'/'}>Places to stay</Link>
            {bookingCtx.totalBookings ?  <Link className='mx-3 nav-link text-light ' to={'/my-bookings'}>
                    My bookings {bookingCtx.totalBookings}</Link> :
             ''}

            {user ?
                <Link className='ms-auto mx-3 nav-link text-light fw-bold' to={'/dashboard'}>Dashboard</Link> :
                <Link className='ms-auto mx-3 nav-link text-light fw-bold' to={'/login'}>Become a host</Link>}




        </div>
    );
}