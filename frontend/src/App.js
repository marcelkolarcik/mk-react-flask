import React from 'react';
import './App.css';

import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";

import Login from "./components/auth/Login";

import Register from "./components/auth/Register";
import Reset from "./components/auth/Reset";
import Dashboard from "./components/auth/Dashboard";
import Front from "./components/pages/Front";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase";


function App() {

    const [user] = useAuthState(auth);

    return (
        <div className="App">

            <Router>
                <div className='d-flex justify-content-center bg-dark'>
                    {user ? <Link className='mx-3 nav-link text-muted' to={'/dashboard'}>Dashboard</Link> :
                        <Link className='mx-3 nav-link text-muted' to={'/login'}>Login</Link>}

                    <Link className='mx-3 nav-link text-muted' to={'/'}>Home</Link>
                </div>

                <Routes>
                    <Route path="/api/index" element={<Front/>}/>
                    <Route path="/" element={<Front/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/reset" element={<Reset/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Routes>


            </Router>


        </div>
    );
}

export default App;
