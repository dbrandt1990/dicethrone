import React from 'react'
import { Player } from '../components/Player'
import { connect } from 'react-redux'


class Player2Container extends React.Component {

    render() {
        return (
            <div id='player2container'>
                <Player id='P2cont' won={this.props.won} player="P2" name={this.props.P2_name} hp={this.props.P2HP} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        gameStatus: state.manageGame.status,
        P2_name: state.manageGame.P2.username,
        P2HP: state.manageGame.P2HP,
        currPlayer: state.manageGame.turn,
        won: state.manageGame.won
    }
}


export default connect(mapStateToProps)(Player2Container)