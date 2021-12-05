import React from 'react';

import {Route, Routes} from "react-router-dom";

import Login from "./components/auth/Login";

import Register from "./components/auth/Register";
import Reset from "./components/auth/Reset";
import Dashboard from "./components/auth/Dashboard";
import Front from "./components/pages/Front";
import Room from "./components/pages/Room";
import SearchResults from "./components/pages/SearchResults";
import Layout from "./components/ui/Layout";
import Bookings from "./components/pages/Bookings";

function App() {

    return (
        <Layout>
            <Routes>
                <Route path="/api/index" element={<Front/>}/>
                <Route path="/" element={<Front/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/reset" element={<Reset/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/my-bookings" element={<Bookings/>}/>
                <Route path={`room/:roomId`} element={<Room/>}/>
                <Route path={`search/:searchString`} element={<SearchResults/>}/>
            </Routes>
        </Layout>

    );
}

export default App;
