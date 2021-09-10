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
        console.log('User1', this.props.user1, 'User2', this.props.user2)
        if (this.state.start && typeof this.props.user1 === 'object' && typeof this.props.user2 === 'object') {
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
        user1: state.manageGame.P1,
        user2: state.manageGame.P2
    }
}

export default connect(mapStateToProps)(StartGame)