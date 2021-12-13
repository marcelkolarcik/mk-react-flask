import React, {useEffect, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import './SearchMap.module.css'
import RoomCard from "../components/room/RoomCard";
import SinglePlaceholderCard from "../components/ui/SinglePlaceholderCard";

export default function SearchMap() {
    const [isLoading, setIsLoading] = useState(true);
    const [markers, setMarkers] = useState([]);

    useEffect(() => {

        fetch('/api/rooms/?map=1')
            .then(response => {
                if (response.status === 200) return response.json()
            }).then(data => {
            setMarkers(data.rooms)

            setIsLoading(false)
        }, error => {
            console.log('error: ' + error)
        })
    }, [])

    if (isLoading) {
        return <div className={'container'}>
            <p className="lead text-center">Loading the map...</p>
            <SinglePlaceholderCard key={'index'} id={'index'}/>
        </div>
    } else {
        return (
            <div className={'container bg-light container-fluid'}>


                <div className="row  my-5">
                    <p className={'text-center lead'}>{'Click on the marker to see the room details'}
                        <br/> Displaying {markers.length} results.</p>
                    <div className="col-12 col-lg-9 mx-lg-auto">
                        <MapContainer style={{height: 400}}
                                      center={[41.39, 2.2]}
                                      zoom={2}
                                      scrollWheelZoom={false}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />
                            {markers.map(room => (
                                <Marker
                                    key={room._id}
                                    position={[room.coordinates[1], room.coordinates[0]]}
                                >
                                    <Popup>

                                        <RoomCard key={room._id} room={room}/>
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>
                </div>

            </div>
        );
    }

}