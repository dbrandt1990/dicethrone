import React from 'react'
import { Player } from '../components/Player'
import { connect } from 'react-redux'


class PlayersContainer extends React.Component {

    render() {
        return (
            <div id='playerscontainer'>
                <Player id='P1cont' won={this.props.won} player='P1' hp={this.props.P1HP} />
                <Player id='P2cont' won={this.props.won} player='P2' hp={this.props.P2HP} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        P1HP: state.manageGame.P1HP,
        P2HP: state.manageGame.P2HP,
        currPlayer: state.manageGame.turn,
        won: state.manageGame.won
    }
}


export default connect(mapStateToProps)(PlayersContainer)