import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
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