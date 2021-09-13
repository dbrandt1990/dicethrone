import React from 'react'
import { connect } from 'react-redux';

const Ranks = (props) => {


    const getRanks = () => {

        fetch("http://localhost:3000/api/user", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(users => {
                let sorted = users.users.filter(u => u.rank).sort((a, b) => a.rank - b.rank)
                console.log(sorted)
                return props.ranks(sorted)
            }).catch(err => { console.log(err.full_messages) })
    }

    return (
        <div id='leaderBoard'>
            <h3>Leader Board</h3>
            {getRanks()}
            {console.log(props.ranks)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ranks: state.manageRanks.ranks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ranks: (sortedUsers) => dispatch({ type: 'GET_RANKS', sortedUsers })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ranks)
