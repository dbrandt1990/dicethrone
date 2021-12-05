import DiceContainer from "./DiceContainer";
import Player1Container from "./Player1Container";
import Player2Container from "./Player2Container";
import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from "react-router-dom";
class GameContainer extends React.Component {
    
    componentWillUnmount() {
        if(this.props.won){
            console.log('unmounting and updating')
            this.updateAfterWin()
        }
    }

    updateUser = (player) => {
        // patch request to update users wins and losses if game won
        fetch(`http://localhost:3000/api/user/${player.id}`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                '_method': 'PATCH',
                'Authorization': ''
            },
            body: JSON.stringify(player)
        })
            .then(res => res.json())
            .then(res => {
                console.log("results from patching User", res);
            })
            .catch(err => console.error(err.full_messages))
    }

    handleExit = (e) => {
        e.preventDefault()
        if(this.props.won){
            this.props.updateUsersInState(this.props.P1, this.props.P2)
        }
        this.props.logOut()
    }

    updateAfterWin = async () => {
        await this.updateUser(this.props.P1)

        setTimeout(() => {
            this.updateUser(this.props.P2)
        }, 2000);
    }

    render() {
        { if (!this.props.loggedIn) { return <Redirect to='/' /> } }
        return (
            <div id="gamecontainer" >
                <Player1Container />
                <Player2Container />
                <DiceContainer />
                <button className={this.props.won ? 'btn btn-success' : 'btn btn-danger'} id='exitGame' onClick={this.handleExit}>Exit</button>
                <Link className='btn btn-info' id='rulesBtn' to='/rules'>Rules</Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        won: state.manageGame.won,
        loggedIn: state.manageGame.loggedIn,
        P1: state.manageGame.P1,
        P2: state.manageGame.P2,
        allUsers: state.manageUsers.allUsers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch({ type: 'LOG_OUT' }),
        updateUsersInState: (p1, p2) => dispatch({ type: 'UPDATE_USERS', p1, p2 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
