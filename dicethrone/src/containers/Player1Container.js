import React from 'react'
import { Player } from '../components/Player'
import { connect } from 'react-redux'


class Player1Container extends React.Component {

    render() {
        return (
            <div id='player1container'>
                <Player id='P1cont' won={this.props.won} player="P1" name={this.props.P1_name} hp={this.props.P1HP} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        gameStatus: state.manageGame.status,
        P1_name: state.manageGame.P1.username,
        P1HP: state.manageGame.P1HP,
        currPlayer: state.manageGame.turn,
        won: state.manageGame.won
    }
}


export default connect(mapStateToProps)(Player1Container)