import Row from "react-bootstrap/Row";
import React, {useContext, useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import SinglePlaceholderCard from "./SinglePlaceholderCard";
import RoomCard from "./room/RoomCard";
import Col from 'react-bootstrap/Col';
import BookingContext from "../../store/booking-context";
import DateFormater from "../ui/DateFormater";
import PlaceholderRoomCards from "./room/PlaceholderRoomCards";

export default function SearchResults() {
    const [isLoading, setIsLoading] = useState(true)
    const [searchResults, setSearchResults] = useState([])
    const bookingCtx = useContext(BookingContext)

    useEffect(() => {
        setIsLoading(true)
        fetch('/api/search/',
            {
                method: 'POST',
                body: JSON.stringify({
                    country: bookingCtx.country,
                    guests: bookingCtx.guests,
                    nights: bookingCtx.numOfNights
                }),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                }
            })
            .then(data => {

                setIsLoading(false)
                setSearchResults(data.results)


            })
            .catch(error => {
                alert('error : ' + error)
            })
    }, [bookingCtx.country])

    if (isLoading) {

        return (
            <Container>
                <Row className={'row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3'}>
                    <SinglePlaceholderCard id={'placeholder'} text={'Search results for ' + bookingCtx.country}/>
                    <PlaceholderRoomCards/>
                </Row>
            </Container>


        );
    } else {

        return (
            <Container>
                <Col md={12} className={'p-3 bg-light sticky-top'}>
                    Search results for {bookingCtx.country}, {bookingCtx.numOfNights} nights,
                    from <DateFormater date={bookingCtx.startDate}/>

                    till <DateFormater date={bookingCtx.endDate}/>, {bookingCtx.guests} guests.</Col>
                <Row className={'row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3'}>

                    {searchResults.length ? searchResults.map(room => (<RoomCard key={room._id} room={room}/>)) :
                        <h1>No results</h1>}
                </Row>
            </Container>

        );
    }


}