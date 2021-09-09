import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

class StartGame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            start: false
        }
    }

    handleStart = () => {
        this.setState({
            start: true
        })
    }

    confirmedUsers = () => {

        if (this.state.start) {
            return <Redirect to='/game' />
        }
    }

    render() {

        return (
            <div id='start_game' >
                {this.confirmedUsers()}
                <h3>Starting Game!</h3>
                <button type='button' onClick={this.handleStart} >Start!</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user1: state.manageGame.P1_username,
        user2: state.manageGame.P2_username
    }
}

export default connect(mapStateToProps)(StartGame)