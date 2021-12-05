import {Link} from "react-router-dom";
import classes from "../Front.module.css";
import RoomInfo from "./RoomInfo";
import Star from "../../ui/Star";
import React from "react";
import CostPerTrip from "./CostPerTrip";
import PriceFormater from "../../ui/PriceFormater";
export default function RoomCard(props) {
    let room = props.room

    return (
        <div className="col mb-3 " key={room._id}>
            <Link className='text-muted text-decoration-none' to={'/room/' + room._id}>
                <div className={"card h-100 text-start " + classes.room}>
                    <CostPerTrip room={room}/>
                    <img className='rounded-3'
                         style={{height: '150px', width: 'auto'}}
                         src={room.images.picture_url ? room.images.picture_url : "https://source.unsplash.com/featured/500x500?hotel,room," + room._id}
                         alt=""/>

                    <div className="card-header bg-transparent border-0">
                        <p className="small">

                            <strong>{room.name.substring(0, 20) + '...'} </strong>
                        </p>
                        <p className="small text-center"><PriceFormater price={room.price}/>/night</p>

                    </div>
                    <div className="card-body p-0">
                        <RoomInfo room={room}/>
                        <p className="small text-muted p-0 m-0 px-1">
                            <Star/> {room.reviews.length} reviews
                        </p>

                    </div>


                </div>
            </Link>
        </div>
    );
}