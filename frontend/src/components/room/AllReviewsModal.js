import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import ReviewScores from "./ReviewScores";
import ReviewsHeading from "../ui/ReviewsHeading";
import ReviewComment from "./ReviewComment";

export default function AllReviewsModal(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className={'bg-transparent text-primary text-decoration-underline'} onClick={handleShow}>
                Show all {props.room.reviews.length} reviews
            </Button>

            <Modal size={'lg'} show={show} onHide={handleClose} animation={false} scrollable={true}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <ReviewsHeading room={props.room}/>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ReviewScores room={props.room}/>
                    {props.room.reviews.map((review) => (
                        <ReviewComment review={review}/>
                    ))}
                </Modal.Body>

            </Modal>
        </>
    );
}