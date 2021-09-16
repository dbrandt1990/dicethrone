import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

const StartGame = (props) => {

    const renderPlayers = () => {

        if (props.user1 && props.user2) {
            return <Redirect to='/game' />
        } else {
            return (
                <div>
                    <p>Sorry there was a problem validating those users. Please go back and try again.</p>
                </div>
            )
        }
    }

    return (
        <div id='start_game' >
            <h3>Oopps..</h3>
            {renderPlayers()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user1: state.manageGame.P1,
        user2: state.manageGame.P2
    }
}

export default connect(mapStateToProps)(StartGame)