import MainNavigation from "../pages/MainNavigation";
import Footer from "../pages/Footer";
import React from "react";

export default function Layout(props) {
    return (
        <div>
            <MainNavigation/>
            <main>{props.children}</main>
            <Footer/>
        </div>

    );
}