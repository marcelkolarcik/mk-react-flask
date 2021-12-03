import ProgressBar from "react-bootstrap/ProgressBar";
import React from "react";

export default function Score(props)
{
    return (
         <div className="col">
                    <div className="row d-flex align-items-center">
                        <div className="col small p-2">{props.scoreName}</div>
                        <div className="col">
                            <ProgressBar  variant={'black'}
                                          style={{height:'5px'}}
                            now={parseInt(props.score) * 10}/></div>
                        <div className="col small">{props.score}</div>
                    </div>
                </div>
    );
}