import React from 'react';

export default function Reviews(props) {
    return (


            props.reviews.map((review) => (
            <p key={review._id}>{review.comments}
                <br/><span className={'text-muted'}>
                    by {review.reviewer_name}</span>
            </p>
            ))


)
}