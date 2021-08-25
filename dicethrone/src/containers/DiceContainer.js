import React from 'react'
import { Dice } from '../components/Dice'
import { connect } from 'react-redux'

class DiceContainer extends React.Component {

    handleClick = (e) => {
        //getting the number of the die from the id and making it the index value
        let index = e.target.id[3] - 1
        let clicks = this.props.clicked
        if (this.props.rolls > 1 && this.props.rolls < 4) {
            if (clicks[index]) {
                e.target.className = `die${this.props.currentPlayer}`
                clicks[index] = false
            } else {
                e.target.className = 'die-clicked'
                clicks[index] = true
            }

        }

        this.props.chooseDice(clicks)
    }

    handleRoll = () => {
        console.log(this.props.won)
        if (!this.props.won) {
            console.log('cicked in roll', this.props.clicked, 'rolls', this.props.rolls)
            if (this.props.rolls === 1) {
                this.props.rollDice([true, true, true, true, true])
            }
            if (this.props.rolls <= 3 && this.props.clicked.includes(true)) {
                this.props.rollDice(this.props.clicked)
            }
        }
        document.querySelectorAll('.die-clicked').forEach(e => { e.className = `die${this.props.currentPlayer}` })

    }

    finishTurn = () => {
        if (!this.props.won && this.props.rolls > 1) {
            document.querySelector('#finishTurn').className = 'finish'

            this.props.resolveDice(this.props.results)

            this.props.resetDice()

            this.props.nextTurn()

            this.props.endGame()
        }
    }

    render() {
        return (
            <div id='dicecontainer'>
                <Dice currentPlayer={this.props.currentPlayer} handleClick={this.handleClick} results={this.props.results} />
                <button onClick={this.handleRoll}>Roll</button>
                <button id='finishTurn' onClick={this.finishTurn}>Finish</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
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