import React from 'react';

import {Route, Routes} from "react-router-dom";

import Login from "./auth/Login";

import Register from "./auth/Register";
import Reset from "./auth/Reset";
import Dashboard from "./auth/Dashboard";
import Front from "./pages/Front";
import Room from "./pages/Room";
import SearchResults from "./pages/SearchResults";
import Layout from "./components/ui/Layout";
import Bookings from "./pages/Bookings";
import SearchMap from "./pages/SearchMap";

function App() {

    return (
        <Layout>
            <Routes>
                <Route path="/api/index" element={<Front/>}/>
                <Route path="/" element={<Front/>}/>
                 <Route path="/map" element={<SearchMap/>}/>
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
