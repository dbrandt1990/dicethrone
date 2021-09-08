import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username1: '',
            username2: '',
            game_created: false
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createGame(this.state.username1, this.state.username2, null, null)
        this.setState({
            username1: '',
            username2: '',
            game_created: true
        })
    }

    render() {
        if (this.state.user1 !== 'Player 1' && this.state.user2 !== 'Player 2') {
            return <Redirect to='/game' />
        }
        return (
            <div id='login'>
                <form onSubmit={this.handleSubmit}>
                    <h3>Login</h3>
                    <label>Player 1: </label>
                    <input onChange={this.handleChange} type='text' name='username1' placeholder='username' />
                    <label>Player 2: </label>
                    <input onChange={this.handleChange} type='text' name='username2' placeholder='username' />
                    <button type='submit'>Start Game</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user1: state.manageGame.P1_username,
        user2: state.manageGame.P2_username
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createGame: (P1, P2) => dispatch({ type: 'CREATE_GAME', P1, P2 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)