import React, {useEffect, useState} from 'react';


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
            <div className="container">
                <h1>React-Flask-Mongo example with authorization with Firebase.</h1>
                <div className="row row-cols-2 row-cols-md-4 row cols-lg-5 g-3">
                    {rooms.map(room => {
                        return (<div className="col mb-3 " key={room._id}>
                            <div className="card h-100">
                                <img
                                    src={room.images.picture_url ? room.images.picture_url : "https://source.unsplash.com/featured/500x500?hotel,room," + room._id}
                                    alt=""/>
                                <div className="card-header">
                                    <p className="small"><strong>Name:</strong><br/>{room.name} <br/>
                                        <strong>{room.price} </strong></p>
                                </div>
                                <div className="card-body">
                                    <p className="small text-start">
                                        <strong>Description:</strong>
                                        <br/>
                                        {room.description.substring(0, 100) + '...'}
                                    </p>

                                </div>
                                <div className="card-footer">
                                    <p className="small text-start">
                                        <strong>First review</strong> <br/>
                                        {room.reviews.length ? room.reviews[0]['comments'].substring(0, 100) + '...' : 'no reviews'}
                                    </p>


                                </div>
                            </div>
                        </div>)
                    })}

                </div>


            </div>
        );
    }


}