import DiceContainer from "./DiceContainer";
import PlayersContainer from "./PlayersContainer";
import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router'



class GameContainer extends React.Component {
    // !redirect to winners page 
    gameWon = () => {
        return <Redirect to='/winner' />
    }
    handleExit = (e) => {
        e.preventDefault()
        this.props.resetState()
        return <Redirect to='/' />
    }
    render() {
        { if (!this.props.loggedIn) { return <Redirect to='/' /> } }
        return (
            <div id="gameContainer" >
                <DiceContainer />
                <PlayersContainer />
                <button id='exitGame' onClick={this.handleExit}>Exit</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        won: state.manageGame.won,
        loggedIn: state.manageGame.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetState: () => dispatch({ type: 'RESET_STATE' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
