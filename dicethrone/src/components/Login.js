import React from 'react'

export const Login = (props) => {
    return (
        <div id='login'>
            <form onSubmit={() => { }}>
                <h3>Login</h3>
                <label>Player 1: </label>
                <input type='text' name='p1Username' placeholder='username' />
                <input type='password' name='p1Password' placeholder='password' /><br />
                <label>Player 2: </label>
                <input type='text' name='p2Username' placeholder='username' />
                <input type='password' name='p2Password' placeholder='password' /><br />
                <button type='submit'>Start Game</button>
            </form>
        </div>
    )
}