import React from 'react'
import { Redirect } from 'react-router-dom'
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

    componentDidMount() {
        this.props.resetState()
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let P1 = this.state.username1
        let P2 = this.state.username2
        let allUsersArr = this.props.allUsers
        this.props.confirmUsers(P1, P2, allUsersArr)

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
                    <div id='loginInputs'>
                        <h3>Login</h3>
                        <label>Player 1: </label>
                        <input onChange={this.handleChange} type='text' name='username1' placeholder='username' /><br />
                        <label>Player 2: </label>
                        <input onChange={this.handleChange} type='text' name='username2' placeholder='username' /><br />
                    </div>
                    <button className='btn btn-warning' type='submit'>Start Game</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        allUsers: state.manageUsers.allUsers,
        gameState: state.manageGame
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUsers: (userArr) => dispatch({ type: 'GET_USERS', userArr }),
        confirmUsers: (P1, P2, allUsersArr) => dispatch({ type: 'CONFIRM_USERS', P1, P2, allUsersArr }),
        createGame: (P1, P2) => dispatch({ type: 'CREATE_GAME', P1, P2 }),
        resetState: () => dispatch({ type: 'RESET_STATE' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)