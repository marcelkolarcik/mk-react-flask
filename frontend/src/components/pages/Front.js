import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Star from "../ui/Star";
import classes from './Front.module.css'
import RoomInfo from "../ui/RoomInfo";
import SearchBar from "../ui/SearchBar";
import RoomCard from "./RoomCard";
import PlaceholderRoomCards from "./PlaceholderRoomCards";

export default function Front() {

    const [rooms, setRooms] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch('/api/rooms/')
            .then(response => {
                return response.json()
            }).then(data => {
            setRooms(data.rooms)
            setIsLoading(false)

        })
            .catch(error => {
                alert('error: ' + error)
            })
    }, [])


    return (
        <div>

            <div className={'row border-top border-danger bg-black g-0 '}>


                <SearchBar/>


                <div className={classes.hero}>
                    <h4 className={'mx-auto text-center'}>React-Flask-Mongo example with authorization with
                        Firebase.</h4>
                    <h3 className={'mt-auto mx-auto'}>Not sure where to go? Perfect.</h3>
                </div>
            </div>
            <div className="container mt-5">

                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">

                    {isLoading ? <PlaceholderRoomCards/> : rooms.map(room =>

                        (

                           <RoomCard room={room}/>
                        )
                    )}

                </div>
            </div>


        </div>
    );


}