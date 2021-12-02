import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Star from "../ui/Star";
import classes from './Front.module.css'
import RoomInfo from "../ui/RoomInfo";
import SearchBar from "../ui/SearchBar";

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


    if (isLoading) {
        return (<h1>Loading rooms</h1>)
    } else {
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
                        {rooms.map(room =>

                             (

                                <div className="col mb-3 " key={room._id}>
                                    <Link className='text-muted text-decoration-none' to={'/room/' + room._id}>
                                        <div className={"card h-100 text-start " + classes.room}>
                                            <img className='rounded-3'
                                                 style={{height: '150px', width: 'auto'}}
                                                 src={room.images.picture_url ? room.images.picture_url : "https://source.unsplash.com/featured/500x500?hotel,room," + room._id}
                                                 alt=""/>

                                            <div className="card-header bg-transparent border-0">
                                                <p className="small">
                                                    <strong>{room.name.substring(0, 20) + '...'} </strong>
                                                </p>

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
                            )
                        )}

                    </div>
                </div>


            </div>
        );
    }


}