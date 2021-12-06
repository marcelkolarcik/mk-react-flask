import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ImageAndName from "../components/room/ImageAndName";
import AccessAndDescription from "../components/room/AccessAndDescription";
import Reviews from "../components/room/Reviews";
import ReviewScores from "../components/room/ReviewScores";
import SinglePlaceholderCard from "../components/ui/SinglePlaceholderCard";
import AllReviewsModal from "../components/room/AllReviewsModal";
import BookNow from "../components/room/BookNow";

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
                <BookNow room={room}/>

                <ImageAndName room={room}/>
                <AccessAndDescription room={room}/>
                <ReviewScores room={room}/>
                <Reviews reviews={room.reviews}/>
                {room.reviews.length > 6 ? <AllReviewsModal room={room}/> : ''}


            </div>
        )
    }

}