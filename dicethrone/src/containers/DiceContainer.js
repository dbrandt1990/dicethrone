import React from 'react'
import { Dice } from '../components/Dice'
import { connect } from 'react-redux'
import useSound from 'use-sound';


class DiceContainer extends React.Component {

    handleClick = (e) => {
        //getting the number of the die from the id and making it the index value
        let index = e.currentTarget.id[3] - 1
        let clicks = this.props.clicked
        if (this.props.rolls > 1 && this.props.rolls < 4) {
            if (clicks[index]) {
                e.currentTarget.className = `die${this.props.currentPlayer}`
                clicks[index] = false
            } else {
                e.currentTarget.className = 'die-clicked'
                clicks[index] = true
            }

        }

        this.props.chooseDice(clicks)
    }

    handleRoll = (e) => {
        e.preventDefault()
        if (!this.props.won) {
            console.log('cicked in roll', this.props.clicked, 'rolls', this.props.rolls)
            if (this.props.rolls === 1) {
                this.props.rollDice([true, true, true, true, true])
            }
            if (this.props.rolls <= 3 && this.props.clicked.includes(true)) {
                this.props.rollDice(this.props.clicked)
            }
        }
        document.querySelector('#roll').className = 'btn btn-warning'

        document.querySelectorAll('.die-clicked').forEach(e => { e.className = `die${this.props.currentPlayer}` })
    }

    finishTurn = (e) => {
        e.preventDefault()
        if (!this.props.won && this.props.rolls > 1) {
            document.querySelector('#finishTurn').className = 'btn btn-warning'

            this.props.resolveDice(this.props.results)

            this.props.resetDice()

            this.props.nextTurn()

            this.props.endGame()
        }

        document.querySelector('#roll').className = 'btn btn-success'
        document.querySelector('#rollText').style.visibility = 'visible'
        document.querySelector('#rollText').className = 'fadeout'

        setTimeout(() => {
            document.querySelector('#rollText').style.visibility = 'hidden'
            document.querySelector('#rollText').className = ''
        }, 3000);
    }

    renderButtons = () => {
        if(this.props.won){
            document.querySelector('#roll').style.visibility = 'hidden'
            document.querySelector('#finishTurn').style.visibility = 'hidden'
        }
        return(
            <div id='rollButtons'>
            <button className='btn btn-success' id='roll' onClick={this.handleRoll}>Roll</button>
            <button className='btn btn-warning' id='finishTurn' onClick={this.finishTurn}>Finish</button>
            </div>
        )
    }

    render() {
        return (
            <div id='dicecontainer'>
                <div id='rollText'>
                    <h3 id='rollResults'>{this.props.rollText.type}</h3>
                    <h4 id='effectText'>{this.props.rollText.effect}</h4>
                </div>
                <Dice currentPlayer={this.props.currentPlayer} handleClick={this.handleClick} results={this.props.results} />
                {this.renderButtons()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        rollText: state.manageGame.rollText,
        rolls: state.manageDice.rolls,
        results: state.manageDice.results,
        clicked: state.manageDice.clicked,
        won: state.manageGame.won,
        currentPlayer: state.manageGame.turn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        rollDice: toRoll => dispatch({ type: 'ROLL_DICE', toRoll }),
        chooseDice: clicked => dispatch({ type: 'CLICK_DICE', clicked }),
        resolveDice: results => dispatch({ type: 'RESOLVE_DICE', results }),
        resetDice: () => dispatch({ type: 'RESET_DICE' }),
        nextTurn: () => dispatch({ type: 'NEXT_TURN' }),
        endGame: () => dispatch({ type: 'WIN_GAME' })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DiceContainer)