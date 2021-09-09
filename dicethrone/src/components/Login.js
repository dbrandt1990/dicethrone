import React from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username1: '',
            username2: '',
            ready: false
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    fetchUsers = () => {
        return fetch("http://localhost:3000/api/user")
            .then(response => response.json())
            .then(users => {
                console.log('fetched users', users)
                return users
            })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let P1 = this.state.username1
        let P2 = this.state.username2
        let users = this.fetchUsers()
        // ! look at async request to wait for the users to fetch, check if users are included and then create the game
        console.log("Users", users)
        let P1_confirmed = Object.keys(users).some((key) => {
            return users[key].includes(P1)
        })
        let P2_confirmed = Object.keys(users).some((key) => {
            return users[key].includes(P2)
        })
        console.log(P1_confirmed)

        this.props.createGame(this.state.username1, this.state.username2)
        if (this.state.username1 !== '' && this.state.username2 !== '' && P1_confirmed && P2_confirmed)
            this.setState({
                username1: '',
                username2: '',
                ready: true
            })
    }


    render() {

        if (this.state.ready) {
            return <Redirect to='/start' />
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

const mapDispatchToProps = dispatch => {
    return {
        createGame: (P1, P2) => dispatch({ type: 'CREATE_GAME', P1, P2 })
    }
}

export default connect(null, mapDispatchToProps)(Login)