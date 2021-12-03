import Row from "react-bootstrap/Row";
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Container from "react-bootstrap/Container";
import SinglePlaceholderCard from "./SinglePlaceholderCard";
import RoomCard from "./RoomCard";
import Col from 'react-bootstrap/Col';

export default function SearchResults() {
    const [isLoading, setIsLoading] = useState(true)
    const [searchResults, setSearchResults] = useState([])
    let {searchString} = useParams();
    useEffect(() => {
        setIsLoading(true)
        fetch('/api/search/' + searchString + '/')
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
    }, [searchString])

    if (isLoading) {

        return (
            <SinglePlaceholderCard id={'placeholder'} text={'Search results for '+searchString}/>

        );
    } else {

        return (
            <Container>
                <Col md={12}> Search results for {searchString}</Col>
                <Row className={'row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3'}>

                    {searchResults.length ? searchResults.map(room => (<RoomCard key={room._id} room={room}/>)) :
                        <h1>No results</h1>}
                </Row>
            </Container>

        );
    }


}