import React from 'react'
import { NavLink } from 'react-router-dom'

class HomePage extends React.Component {


    render() {
        return (
            <div id='homepage'>
                <h1>WELCOME TO DICETHRONE-lite</h1>
                <NavLink to='/signup'>Sign Up</NavLink>
                <NavLink to='/login'>Start Game</NavLink>
                <NavLink to='/ranks'>Leader Board</NavLink>
            </div>
        )
    }
}


export default HomePage