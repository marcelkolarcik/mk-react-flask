import {Link} from "react-router-dom";
import React from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase";

export default function MainNavigation() {
    const [user] = useAuthState(auth);
    return (
        <div className='d-flex justify-content-center  bg-black '>
            <Link className='mx-3 nav-link text-light fw-bold' to={'/'}>Demo App</Link>
            <Link className='mx-3 nav-link text-light ' to={'/'}>Places to stay</Link>


            {user ?
                <Link className='ms-auto mx-3 nav-link text-light fw-bold' to={'/dashboard'}>Dashboard</Link> :
                <Link className='ms-auto mx-3 nav-link text-light fw-bold' to={'/login'}>Become a host</Link>}


        </div>
    );
}