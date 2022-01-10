import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

class HomePage extends React.Component {

    componentDidMount() {
        
        // if(!this.props.loggedIn){
            this.fetchUsers();
            this.timer = setInterval(() => {

                this.fetchUsers()
                console.log('Users added at mount', this.props.allUsers)
            }, 5000);
    // }
    }

    clearTimer = () => {
        clearInterval(this.timer)
        this.timer = null
    }

    async fetchUsers() {
        try {
            const response = await fetch("http://localhost:3000/api/user")
            const json = await response.json()
            this.props.setUsers(json.users)
            console.log('GET_USERS called from hompage', json)
        } catch (err) {
            console.log(err)
        }

    }

    rednerLinks = () => {
        if (this.props.allUsers) {
            this.clearTimer()
            return (
                <div id='homepage-links'>
                    <NavLink className='btn btn-info' to='/signup'>Sign Up</NavLink>
                    <NavLink className='btn btn-info' to='/login'>Start Game</NavLink>
                    <NavLink className='btn btn-info' to='/ranks'>Leader Board</NavLink>
                    <NavLink className='btn btn-info' to='/rules'>Rules</NavLink>
                </div>
            )
        }
    }

    render() {
        return (

            <div id='homepage'>
                {this.clearTimer()}
                <h1 id='welcome'>WELCOME TO DICETHRONE</h1>
                {this.rednerLinks()}
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
        setUsers: (userArr) => dispatch({ type: 'GET_USERS', userArr })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)