import React from 'react'

export const Signup = (props) => {
    return (
        <div id='signup'>
            <form onSubmit={() => { }}>
                <h3>Sign Up</h3>
                <input type='text' name='username' placeholder='username' />
                <input type='password' name='password' placeholder='password' />
                <button type='submit'>Create User</button>
            </form>
        </div>
    )
}