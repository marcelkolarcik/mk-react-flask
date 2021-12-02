import Star from "../ui/Star";
import React from "react";

export default function ReviewScores(props)
{
    let room = props.room
    return (
        <section className={'my-5'}>
              <p className="lead fw-bold"><Star/> {room.review_scores.review_scores_rating}%
                    ({room.reviews.length} reviews)</p>
                <div className="row row-cols-md-2 row-cols-1">
                    <div className="col">
                        <p className="small">
                            Accuracy {room.review_scores.review_scores_accuracy}
                        </p>

                    </div>
                    <div className="col">
                        <p className="small">
                            Checkin {room.review_scores.review_scores_checkin}
                        </p>
                    </div>
                    <div className="col">
                        <p className="small">
                            Cleanliness {room.review_scores.review_scores_cleanliness}
                        </p>
                    </div>
                    <div className="col">
                        <p className="small">
                            Communication {room.review_scores.review_scores_communication}
                        </p>
                    </div>
                    <div className="col">
                        <p className="small">
                            Location {room.review_scores.review_scores_location}
                        </p>
                    </div>
                    <div className="col">
                        <p className="small">
                            Value {room.review_scores.review_scores_value}
                        </p>
                    </div>


                </div>
        </section>
    );
}