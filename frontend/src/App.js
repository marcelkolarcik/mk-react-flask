import React from 'react';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Login from "./components/auth/Login";

import Register from "./components/auth/Register";
import Reset from "./components/auth/Reset";
import Dashboard from "./components/auth/Dashboard";
import Front from "./components/pages/Front";
import Room from "./components/pages/Room";
import MainNavigation from "./components/pages/MainNavigation";
import Footer from "./components/pages/Footer";
import SearchResults from "./components/pages/SearchResults";
function App() {


    return (
        <div>

            <Router>
                <MainNavigation/>

                <Routes>
                    <Route path="/api/index" element={<Front/>}/>
                    <Route path="/" element={<Front/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/reset" element={<Reset/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path={`room/:roomId`} element={<Room/>}/>
                    <Route path={`search/:searchString`} element={<SearchResults/>}/>
                </Routes>

                <Footer/>
            </Router>


        </div>
    );
}

export default App;
