import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import classes from './Front.module.css'

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


                    <div className={classes.search_bar}>
                        <div className="d-flex justify-content-around">
                            <div className={'col '+classes.search_bar_item}>

                                     <strong className={'ms-2'}><small>Location</small></strong><br/>
                                <small className={'text-muted ms-2'}>Where are you going?</small>

                               </div>
                            <div className={'d-none d-sm-block col '+classes.search_bar_item}>
                                 <strong><small>Check in</small></strong><br/>
                                <small className={'text-muted'}>Add dates</small>
                            </div>
                            <div className={'d-none d-sm-block col '+classes.search_bar_item}>
                                   <strong><small>Check out</small></strong><br/>
                                <small className={'text-muted'}>Add dates</small>
                            </div>
                            <div className={'d-none d-sm-block col '+classes.search_bar_item}>
                                   <strong><small>Guests</small></strong><br/>
                                <small className={'text-muted'}>Add guests</small>
                            </div>
                            <div className={'col '+classes.search_bar_item}>
                                <div className={'ms-auto  me-2 '+classes.search_btn}>
                                    <>&#128270;</>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={classes.hero}>
                         <h4 className={'mx-auto text-center'}>React-Flask-Mongo example with authorization with Firebase.</h4>
                        <h3 className={'mt-auto mx-auto' }>Not sure where to go? Perfect.</h3>
                    </div>
                </div>
                <div className="container mt-5">

                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
                        {rooms.map(room => {

                            return (

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
                                                <p className="small text-muted p-0 m-0 px-1">
                                                    {room.accommodates} guest{room.accommodates > 1 ? 's' : ''},
                                                    {room.bedrooms} bedroom{room.bedrooms > 1 ? 's' : ''},
                                                    {room.beds} bed{room.beds > 1 ? 's' : ''}
                                                </p>
                                                <p className="small text-muted p-0 m-0 px-1">
                                                <span
                                                    className='text-info'><>&#9733;</></span> {room.reviews.length} reviews
                                                </p>
                                            </div>


                                        </div>
                                    </Link>
                                </div>
                            )
                        })}

                    </div>
                </div>


            </div>
        );
    }


}