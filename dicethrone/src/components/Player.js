import React from 'react'

export const Player = (props) => {
    let name = props.name
    let player = props.player

    return (
        <div className='player' id={player}>
            <h2>{name}</h2>
            <p id={name.concat('HP')}>HP: {props.hp}</p>
        </div>
    )
}