import React from "react";

export default function ReviewComment(props) {
    let review = props.review
    let dt = new Date(review.date);
    return (
        <p key={review._id} className={'border-bottom mb-3 p-3'}>{review.comments}
            <br/><span className={'text-muted fst-italic'}>
                    by {review.reviewer_name} {dt.getFullYear()}/{dt.getMonth()}/{dt.getDay()}
              </span>
        </p>
    );
}