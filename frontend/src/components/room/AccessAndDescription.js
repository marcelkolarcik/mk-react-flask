import React from 'react';
import RoomInfo from "../ui/RoomInfo";
import classes from './AccessAndDescription.module.css'
import Amenities from "./Amenities";

export default function AccessAndDescription (props) {


    return (
        <div className={'row mt-3'}>
            <div className="col-md-9">
                <p className="lead fw-bold">
                    {props.room.room_type} hosted by {props.room.host.host_name} <br/>

                </p>
            </div>
            <div className="col-md-3">
                <img className={classes.avatar} src={props.room.host.host_thumbnail_url} alt={props.room.host.host_name}/>
            </div>

            <RoomInfo room={props.room}/>

            <div className="col-md-6">
                <hr/>
                <p className="small">
                    {props.room.summary}
                </p>
                <hr/>
                <p className="lead fw-bold">Where you'll sleep.</p>
                <img className={'img-thumbnail'} src={props.room.images.picture_url} alt=""/>
                <p>{props.room.bed_type}</p>
                <hr/>
                <p className="lead fw-bold">What this place offers</p>

                <Amenities amenities={props.room.amenities}/>

            </div>

        </div>)
}