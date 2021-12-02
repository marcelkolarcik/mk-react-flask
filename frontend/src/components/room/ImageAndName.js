import React from 'react';
import ReviewsHeading from "../ui/ReviewsHeading";

export default function ImageAndName(props) {

    let Background = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: "300px",
        backgroundImage: `url("${props.room.images.picture_url}")`
    };


    return (
        <div className="row">
            <p className="lead fw-bold">
                {props.room.name}  <>&nbsp;</>


                <span className={'float-end fw-light small'}><>&hearts;</>Save <>&nbsp;</></span>
                <span className={'float-end fw-light small'}>Share <>&nbsp;</></span>
            </p>
            <p className="small p-o m-0">
                <ReviewsHeading room={props.room}/>
                <>&nbsp;</>
                <>&nbsp;</>
                <small className={'text-muted'}>{props.room.host.host_location}</small>
            </p>

            <div className={'mt-3'} style={Background}/>

        </div>
    );
}

