import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            p1Username: '',
            p1Password: '',
            p2Username: '',
            p2Password: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = () => {

    }

    render() {
        return (
            <div id='login'>
                <form onSubmit={() => { }}>
                    <h3>Login</h3>
                    <label>Player 1: </label>
                    <input onChange={this.handleChange} type='text' name='p1Username' placeholder='username' />
                    <input onChange={this.handleChange} type='password' name='p1Password' placeholder='password' /><br />
                    <label>Player 2: </label>
                    <input onChange={this.handleChange} type='text' name='p2Username' placeholder='username' />
                    <input onChange={this.handleChange} type='password' name='p2Password' placeholder='password' /><br />
                    <button type='submit'>Start Game</button>
                </form>
            </div>
        )
    }
}

export default Login