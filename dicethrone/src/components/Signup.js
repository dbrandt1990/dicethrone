import React from 'react'
import { Redirect } from 'react-router'
const SIGNUP_URL = "http://localhost:3000/api/user"

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            submitted: false
        }
    }

    createUser(username, password) {
        const bodyData = { username, password }
        const data = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyData)
        }

        fetch(SIGNUP_URL, data)
            .then(response => response.json())
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.createUser(this.state.username, this.state.password)
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
                    <input onChange={this.handleChange} type='password' name='password' placeholder='password' />
                    <button type='submit'>Create User</button>
                </form>
            </div>
        )
    }
}

export default Signup