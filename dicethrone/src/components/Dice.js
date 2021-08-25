import React from 'react'

export const Dice = (props) => {
    let player = props.currentPlayer === 'P1' ? 'dieP1' : 'dieP2'
    return (
        <div id='dice'>
            <div onClick={props.handleClick} className={player} id='die1'>{props.results[0]}</div>
            <div onClick={props.handleClick} className={player} id='die2'>{props.results[1]}</div>
            <div onClick={props.handleClick} className={player} id='die3'>{props.results[2]}</div>
            <div onClick={props.handleClick} className={player} id='die4'>{props.results[3]}</div>
            <div onClick={props.handleClick} className={player} id='die5'>{props.results[4]}</div>
        </div>
    )
}