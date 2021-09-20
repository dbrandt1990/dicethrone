import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'


const Ranks = (props) => {

    const history = useHistory()

    const renderUsers = () => {
        return props.allUsers.map(u => {
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
            <h1>Leader Board</h1>
            {/* <button className='btn btn-warning' onClick={() => history.push('/')}>Back</button> */}
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
