import React from 'react'

export const Player = (props) => {
    let name = props.name
    let player = props.player

    if (props.hp > 0 && props.won) {
        name = `${name} WINS!`
    }
    return (
        <div className='player' id={player}>
            <h2>{name}</h2>
            <p id={name.concat('HP')}>HP: {props.hp}</p>
        </div>
    )
}