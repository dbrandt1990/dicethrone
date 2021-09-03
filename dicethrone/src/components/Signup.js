import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            submitted: false
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createUser(this.state.username, this.state.password)
        this.setState({
            username: '',
            password: '',
            submitted: true
        })
    }

    render() {
        if (this.state.submitted) {
            return <Redirect to='/' />
        }
        return (
            <div id='signup' >
                <form onSubmit={this.handleSubmit}>
                    <h3>Sign Up</h3>
                    <input onChange={this.handleChange} type='text' name='username' placeholder='username' />
                    <input onChange={this.handleChange} type='text' name='password' placeholder='password' />
                    {/* change the type ^^^ to password, set to texxt to avoid chrome saving */}
                    <button type='submit'>Create User</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (username, password) => dispatch({ type: 'SIGN_UP', username, password })
    }
}

export default connect(null, mapDispatchToProps)(Signup)