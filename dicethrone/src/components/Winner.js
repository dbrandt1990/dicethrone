import React from 'react'

export const Winner = (props) => {
    return (
        <div id='winner'>
            <h1>{props.P1}</h1>
            <p>{props.turn}</p>
        </div>
    )
}