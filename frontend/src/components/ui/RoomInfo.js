import React from "react";

export default function RoomInfo(props) {
    let room = props.room
    return (
        <p className="small text-muted p-0 m-0 px-1">
            {room.accommodates} guest{room.accommodates > 1 ? 's' : ''},
            {room.bedrooms} bedroom{room.bedrooms > 1 ? 's' : ''},
            {room.beds} bed{room.beds > 1 ? 's' : ''},
            {room.bathrooms} bathroom{room.bathrooms > 1 ? 's' : ''},
        </p>
    );
}