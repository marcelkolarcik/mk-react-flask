import React from 'react';
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <div className="row g-0 bg-black mt-5 px-5">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">&copy; 2021 Demo App, Inc</p>
                <Link
                    className='col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none'
                    to={'/'}>Demo App</Link>


                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><Link to={'/'} className="nav-link px-2 text-muted">Places to stay</Link></li>

                </ul>
            </footer>
        </div>
    );
}