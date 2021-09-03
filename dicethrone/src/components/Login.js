import React from 'react'
import { Redirect } from 'react-router'
const SESSION_URL = 'http://localhost:3000/api/session'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username1: '',
            password1: '',
            username2: '',
            password2: '',
            session_created: false
        }
    }

    loginPlayers(username1, password1, username2, password2) {
        const bodyData = { username1, password1, username2, password2 }
        const data = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyData)
        }

        fetch(SESSION_URL, data)
            .then(response => response.json())
            .then(session => console.log('db data', session))
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
            session_created: true
        })
    }

    render() {
        if (this.state.session_created) {
            return <Redirect to='/game' />
        }
        return (
            <div id='login'>
                <form onSubmit={() => { }}>
                    <h3>Login</h3>
                    <label>Player 1: </label>
                    <input onChange={this.handleChange} type='text' name='username1' placeholder='username' />
                    <input onChange={this.handleChange} type='password' name='password1' placeholder='password' /><br />
                    <label>Player 2: </label>
                    <input onChange={this.handleChange} type='text' name='username2' placeholder='username' />
                    <input onChange={this.handleChange} type='password' name='password2' placeholder='password' /><br />
                    <button type='submit'>Start Game</button>
                </form>
            </div>
        )
    }
}

export default Login