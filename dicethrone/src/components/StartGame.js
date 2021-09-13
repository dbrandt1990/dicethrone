import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

const StartGame = (props) => {

    const confirmedUsers = () => {
        console.log('User1', props.user1, 'User2', props.user2)

        if (typeof props.user1 === 'object' && typeof props.user2 === 'object') {
            return <Redirect to='/game' />
        }
    }

    return (
        <div id='start_game' >
            {confirmedUsers()}
            <h3>Finding Users..</h3>
            <h3 className='player' id='P1'>P1: {props.user1.username !== 'undefined' ? props.user1.username : "Player 1"}</h3>
            <h3 className='player' id='P2'>P2: {props.user2.username !== 'undefined' ? props.user1.username : "Player 2"}</h3>
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