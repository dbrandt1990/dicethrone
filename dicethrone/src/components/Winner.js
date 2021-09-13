import React from 'react'

// !show winner and stats, once the server has updated users and calculated rank show a button to exit
export const Winner = (props) => {
    return (
        <div id='winner'>
            <h1>{props.P1}</h1>
            <p>{props.turn}</p>
        </div>
    )
}