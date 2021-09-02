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

    createUser(username, password_digest) {
        const bodyData = { username, password_digest }
        const data = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyData)
        }

        fetch(SIGNUP_URL, data)
            .then(response => response.json())
            .then(user => console.log('db data', user))
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
                    <input onChange={this.handleChange} type='text' name='password' placeholder='password' />
                    {/* change the type ^^^ to password, set to texxt to avoid chrome saving */}
                    <button type='submit'>Create User</button>
                </form>
            </div>
        )
    }
}

export default Signup