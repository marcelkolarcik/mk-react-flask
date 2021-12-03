import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ImageAndName from "../room/ImageAndName";
import AccessAndDescription from "../room/AccessAndDescription";
import Reviews from "../room/Reviews";
import ReviewScores from "../room/ReviewScores";
import SinglePlaceholderCard from "./SinglePlaceholderCard";
import AllReviewsModal from "../room/AllReviewsModal";

export default function Room() {
    let {roomId} = useParams();
    const [room, setRoom] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setIsLoading(true)
        fetch('/api/get_room/' + roomId + '/')
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                }
            })
            .then(data => {
                setRoom(data.room)
                setIsLoading(false)

            })
            .catch(error => {
                alert('error : ' + error)
            })
    }, [roomId])

    if (isLoading) {
        return (
            <div className="container">
                <SinglePlaceholderCard text={'Loading room details...'}/>
            </div>
        );
    } else {
        return (
            <div className='container container-fluid'>
                <ImageAndName room={room}/>
                <AccessAndDescription room={room}/>
                <ReviewScores room={room}/>
                <Reviews reviews={room.reviews}/>
                {room.reviews.length > 6 ? <AllReviewsModal room={room}/> : ''}


            </div>
        )
    }

}