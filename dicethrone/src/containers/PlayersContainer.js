import React from 'react'
import { Player } from '../components/Player'
import { connect } from 'react-redux'


class PlayersContainer extends React.Component {

    render() {
        return (
            <div id='playerscontainer'>
                <h1>{this.props.status}</h1>
                <Player id='P1cont' won={this.props.won} player="P1" name={this.props.P1_name} hp={this.props.P1HP} />
                <Player id='P2cont' won={this.props.won} player="P2" name={this.props.P2_name} hp={this.props.P2HP} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        gameStatus: state.manageGame.status,
        P1_name: state.manageGame.P1.username,
        P2_name: state.manageGame.P2.username,
        P1HP: state.manageGame.P1HP,
        P2HP: state.manageGame.P2HP,
        currPlayer: state.manageGame.turn,
        won: state.manageGame.won
    }
}


export default connect(mapStateToProps)(PlayersContainer)