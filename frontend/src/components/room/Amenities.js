import React from 'react';
export default function Amenities(props)
{

    return (
        <div className={'row row-cols-2'}>
             {props.amenities.map((amenity) => (
                    <div key={amenity} className={'col border border-1 p-2'}>{amenity} </div>
                ))}
        </div>
    );
}