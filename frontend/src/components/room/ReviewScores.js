import Star from "../ui/Star";
import React from "react";
import Score from "./Score";

export default function ReviewScores(props) {
    let room = props.room
    return (
        <section className={'my-5'}>
            <p className="lead fw-bold"><Star/> {room.review_scores.review_scores_rating}%
                ({room.reviews.length} reviews)</p>
            <div className="row row-cols-md-2 row-cols-1">
                <Score scoreName={'Accuracy'} score={room.review_scores.review_scores_accuracy}/>
                <Score scoreName={'Checkin'} score={room.review_scores.review_scores_checkin}/>
                <Score scoreName={'Cleanliness'} score={room.review_scores.review_scores_cleanliness}/>
                <Score scoreName={'Communication'} score={room.review_scores.review_scores_communication}/>
                <Score scoreName={'Location'} score={room.review_scores.review_scores_location}/>
                <Score scoreName={'Value'} score={room.review_scores.review_scores_value}/>
            </div>
        </section>
    );
}