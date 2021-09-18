import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
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
                    <label>Name: </label>
                    <input onChange={this.handleChange} type='text' name='username' placeholder='username' /><br />
                    <button className='btn btn-danger' type='submit'>Create User</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (username) => dispatch({ type: 'SIGN_UP', username })
    }
}

export default connect(null, mapDispatchToProps)(Signup)