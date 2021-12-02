import React from 'react';

import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";

import Login from "./components/auth/Login";

import Register from "./components/auth/Register";
import Reset from "./components/auth/Reset";
import Dashboard from "./components/auth/Dashboard";
import Front from "./components/pages/Front";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase";
import Room from "./components/pages/Room";


function App() {

    const [user] = useAuthState(auth);

    return (
        <div>

            <Router>
                <div className='d-flex justify-content-center  bg-black '>
                    <Link className='mx-3 nav-link text-light fw-bold' to={'/'}>Demo App</Link>
                    <Link className='mx-3 nav-link text-light ' to={'/'}>Places to stay</Link>


                    {user ?
                        <Link className='ms-auto mx-3 nav-link text-light fw-bold' to={'/dashboard'}>Dashboard</Link> :
                        <Link className='ms-auto mx-3 nav-link text-light fw-bold' to={'/login'}>Become a host</Link>}


                </div>

                <Routes>
                    <Route path="/api/index" element={<Front/>}/>
                    <Route path="/" element={<Front/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/reset" element={<Reset/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path={`room/:roomId`} element={<Room/>}/>
                </Routes>


            </Router>


        </div>
    );
}

export default App;
