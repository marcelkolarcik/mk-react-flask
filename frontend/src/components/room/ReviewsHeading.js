import Star from "../ui/Star";
import React from "react";
import {Link} from "react-router-dom";

export default function ReviewsHeading(props) {
    return (
        <span onClick={()=>{
                document.getElementById('reviews').scrollIntoView(true)
            }}
        style={{cursor:'pointer'}}>

            <Star/>
            <strong> {props.room.review_scores.review_scores_rating}%</strong>
            <>&nbsp;</>
            (<span className='text-decoration-underline text-muted'>{props.room.reviews.length} reviews</span>)
        </span>
    );
}