import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username1: '',
            password1: '',
            username2: '',
            password2: '',
            game_created: false
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.loginPlayers(this.state.username1, this.state.password1, this.state.username2, this.state.password2)
        this.setState({
            username1: '',
            password1: '',
            username2: '',
            password2: '',
            game_created: true
        })
    }

    render() {
        if (this.state.game_created) {
            return <Redirect to='/game' />
        }
        return (
            <div id='login'>
                <form onSubmit={() => { }}>
                    <h3>Login</h3>
                    <label>Player 1: </label>
                    <input onChange={this.handleChange} type='text' name='username1' placeholder='username' />
                    {/* <input onChange={this.handleChange} type='password' name='password1' placeholder='password' /><br /> */}
                    <label>Player 2: </label>
                    <input onChange={this.handleChange} type='text' name='username2' placeholder='username' />
                    {/* <input onChange={this.handleChange} type='password' name='password2' placeholder='password' /><br /> */}
                    <button type='submit'>Start Game</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        verifyUsers: () => dispatch({ type: 'FIND_USERS' }),
        createGame: () => dispatch({ type: 'CREATE_GAME', })
    }
}

export default connect(null, mapDispatchToProps)(Login)