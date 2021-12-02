import Star from "./Star";
import React from "react";

export default function ReviewsHeading(props) {
    return (
        <span>
            <Star/>
            <strong> {props.room.review_scores.review_scores_rating}%</strong>
            <>&nbsp;</>
            (<span className='text-decoration-underline text-muted'>{props.room.reviews.length} reviews</span>)
        </span>
    );
}