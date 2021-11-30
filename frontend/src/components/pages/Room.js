import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

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
                console.log(data.room)
            })
            .catch(error => {
                alert('error : ' + error)
            })
    }, [])

    if(isLoading){
        return (
            <div className="container">
                <p className="text-center">loading the room...</p>
            </div>
        );
    }else {
       return (
        <div className='container'>
            <div className="row">
                <h1>Room ID : {roomId}</h1>
                <div className="col-md-6 mx-auto">
                    <p>{room.name || 'Not available at the moment.'}</p>
                </div>
            </div>


        </div>
    )
    }

}