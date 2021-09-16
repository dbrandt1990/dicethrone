import React from 'react'
import { connect } from 'react-redux';

const Ranks = (props) => {

    const renderUsers = () => {

        return props.allUsers.map(u => {
            console.log('in for each loop of users', u.username)
            //! gettig data correctly, not rendering to page though.
            return (
                <tr key={u.id}>
                    <td key={u.id + 'a'}>{u.username}</td>
                    <td key={u.id + 'b'}>{u.rank}</td>
                    <td key={u.id + 'c'}>{u.wins}</td>
                    <td key={u.id + 'd'}>{u.losses}</td>
                </tr>
            )
        })
    }


    return (
        <div id='leaderBoard'>
            <h3>Leader Board</h3>
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Rank</th>
                        <th>Wins</th>
                        <th>Losses</th>
                    </tr>
                </thead>
                <tbody>
                    {renderUsers()}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        allUsers: state.manageUsers.allUsers
    }
}

export default connect(mapStateToProps)(Ranks)
