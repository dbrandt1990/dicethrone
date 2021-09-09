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

    render() {
        return (
            <div id="gameContainer" >
                <DiceContainer />
                <PlayersContainer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        won: state.manageGame.won
    }
}

export default connect(mapStateToProps)(GameContainer)
