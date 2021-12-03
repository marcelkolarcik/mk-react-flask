import Placeholder from "react-bootstrap/Placeholder";
import Card from "react-bootstrap/Card";
import React from "react";

export default function SinglePlaceholderCard() {
    return (<Card>
        <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={12} size={'xl'}/>
        </Placeholder>
        <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6}/>
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7}/> <Placeholder xs={4}/> <Placeholder xs={4}/>{' '}
                <Placeholder xs={6}/> <Placeholder xs={8}/>
            </Placeholder>
            <Placeholder.Button variant="primary" xs={6}/>
        </Card.Body>
    </Card>);
}