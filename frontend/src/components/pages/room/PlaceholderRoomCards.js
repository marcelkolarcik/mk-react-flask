import React from "react";
import SinglePlaceholderCard from "../SinglePlaceholderCard";
export default function PlaceholderRoomCards() {

    return (
        Array.from({length: 12}).map((_, index) => (
            <SinglePlaceholderCard key={index} id={index}/>
        ))

    );
}