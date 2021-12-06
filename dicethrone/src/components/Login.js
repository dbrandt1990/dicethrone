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
        if(!this.props.loggedIn){
        this.props.resetState()
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let P1 = this.state.username1
        let P2 = this.state.username2
        let allUsersArr = this.props.allUsers
        let inputP1= document.getElementById('inputP1')
        let inputP2= document.getElementById('inputP2')

        this.props.confirmUsers(P1, P2, allUsersArr)

            inputP1.value = ''
            inputP2.value =''

            this.setState({
                username1: '',
                username2: '',
                ready: true
            })
    }


    render() {

        if (this.props.loggedIn) {
            return <Redirect to='/game' />
        }
        return (
            <div id='login'>
                <form onSubmit={this.handleSubmit}>
                    <div id='loginInputs'>
                        <h3>Login</h3>
                        <label>Player 1: </label>
                        <input onChange={this.handleChange} type='text' id='inputP1' name='username1' placeholder='username' /><br />
                        <label>Player 2: </label>
                        <input onChange={this.handleChange} type='text' id='inputP2' name='username2' placeholder='username' /><br />
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
        loggedIn: state.manageGame.loggedIn
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