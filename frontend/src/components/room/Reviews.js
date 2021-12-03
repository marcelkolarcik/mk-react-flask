import React from 'react';
import ReviewComment from "./ReviewComment";

export default function Reviews(props) {
    return (


        props.reviews.map((review, idx) => (
            idx < 6 ?
                <ReviewComment review={review}/> : ''
        ))


    )
}