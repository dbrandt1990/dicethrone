import React from 'react'

export const Player = (props) => {
    let player = props.player[1]
    if (props.hp > 0 && props.won) {
        player = `${props.player[1]} WINNER!`
    }
    return (
        <div className='player' id={props.player}>
            <h3>Player {player}</h3>
            <p id={props.player.concat('HP')}>HP: {props.hp}</p>
        </div>
    )
}