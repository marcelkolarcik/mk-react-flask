import React from "react";

export default function DateFormater(props) {

    return (
        <>
            {props.date.toLocaleString().split(',')[0]+' '}
        </>);
}