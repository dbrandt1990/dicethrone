import React from 'react'

export const Dice = (props) => {
    let player = props.currentPlayer === 'P1' ? 'dieP1' : 'dieP2'
    let bolt = "fas fa-bolt fa-2x"
    let skull = "fas fa-skull-crossbones fa-2x"
    let heart = "fas fa-heart fa-2x"

    const setSymbol = (result) => {
        if (result < 4 && result > 0) { return bolt }
        else if (result > 3 && result < 6) { return heart }
        else if (result === 6) { return skull }
        else { return '' }
    }

    return (
        <div id='dice'>
            <div onClick={props.handleClick} className={`${player}`} id='die1'>
                <span className={setSymbol(props.results[0])}>{props.results[0]}</span>
            </div>
            <div onClick={props.handleClick} className={`${player}`} id='die2'>
                <span className={setSymbol(props.results[1])}>{props.results[1]}</span>
            </div>
            <div onClick={props.handleClick} className={`${player}`} id='die3'>
                <span className={setSymbol(props.results[2])}>{props.results[2]}</span>
            </div>
            <div onClick={props.handleClick} className={`${player}`} id='die4'>
                <span className={setSymbol(props.results[3])}>{props.results[3]}</span>
            </div>
            <div onClick={props.handleClick} className={`${player}`} id='die5'>
                <span className={setSymbol(props.results[4])}>{props.results[4]}</span>
            </div>
        </div>
    )
}

