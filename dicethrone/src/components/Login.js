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
    // ! think about moving this to the homepage, gabbing users and putting them in the state, and just confirming them here to help with server issuses
    async fetchUsers(user1, user2) {
        return fetch("http://localhost:3000/api/user", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(users => {
                console.log('fetched users', users.users)
                return this.props.confirmUsers(user1, user2, users.users)
            }).catch(err => {
                alert('there was an issue loading the data base, Please go back and try again')
                console.log(err)
            })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let P1 = this.state.username1
        let P2 = this.state.username2
        this.fetchUsers(P1, P2)

        if (this.state.username1 !== '' && this.state.username2 !== '')
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
        confirmUsers: (P1, P2, allUsersArr) => dispatch({ type: 'CONFIRM_USERS', P1, P2, allUsersArr }),
        createGame: (P1, P2) => dispatch({ type: 'CREATE_GAME', P1, P2 })
    }
}

export default connect(null, mapDispatchToProps)(Login)