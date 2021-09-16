import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

class HomePage extends React.Component {

    async fetchUsers() {
        try {
            const response = await fetch("http://localhost:3000/api/user")
            const json = await response.json()
            this.props.setUsers(json.users)
            console.log('Users added to reducer state')

        } catch (err) {
            console.log(err)
        }

    }

    rednerLinks = () => {
        if (this.props.allUsers) {
            this.clearTimer()
            return (
                <div id='homepage-links'>
                    <NavLink to='/signup'>Sign Up</NavLink>
                    <NavLink to='/login'>Start Game</NavLink>
                    <NavLink to='/ranks'>Leader Board</NavLink>
                </div>
            )
        }
    }

    componentDidMount() {
        this.fetchUsers();
        this.timer = setInterval(() => {
            this.fetchUsers()
            console.log('Users added at mount', this.props.allUsers)
        }, 5000);
    }

    clearTimer = () => {
        clearInterval(this.timer)
        this.timer = null
    }

    render() {
        return (

            <div id='homepage'>
                {this.clearTimer()}
                <h1>WELCOME TO DICETHRONE-lite</h1>
                {this.rednerLinks()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        allUsers: state.manageUsers.allUsers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUsers: (userArr) => dispatch({ type: 'GET_USERS', userArr })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)