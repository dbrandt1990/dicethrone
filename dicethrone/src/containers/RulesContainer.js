import React from 'react'
import  { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

const Rules = (props) => {

    const history = useHistory()
    const bolt = "fas fa-bolt fa-2x"
    const skull = "fas fa-skull-crossbones fa-2x"
    const heart = "fas fa-heart fa-2x"

    return (
        <div id='rulesPage'>
            <ul>
        <h1>Dice Results</h1>
        <button className='btn btn-warning' onClick={() => {
            if(props.loggedIn){
            history.push('/game')
            }else{
            history.push('/')
        }
        }}>Back</button>
                <li>
                    <div className='dieP2' id='die1'>
                    <span className={skull}>6</span>
                    </div>
                    <div className='dieP2' id='die1'>
                    <span className={skull}>6</span>
                    </div>
                    <div className='dieP2' id='die1'>
                    <span className={skull}>6</span>
                    </div>
                    <div className='dieP2' id='die1'>
                    <span className={skull}>6</span>
                    </div>
                    <div className='dieP2' id='die1'>
                    <span className={skull}>6</span>
                    </div>
                    <p>Yout ultimate attack does 18 damge to your opponent.</p>
                </li>
                <li>
                    <div className='dieP1' id='die1'>
                    <span className={bolt}>1</span>
                    </div>
                    <div className='dieP1' id='die1'>
                    <span className={bolt}>2</span>
                    </div>
                    <div className='dieP1' id='die1'>
                    <span className={bolt}>3</span>
                    </div>
                    <div className='dieP1' id='die1'>
                    <span className={heart}>4</span>
                    </div>
                    <div className='dieP1' id='die1'>
                    <span className={heart}>5</span>
                    </div>
                    <p>A large straight results in 7 damage to the opponent and 2 HP for the current player.</p>
                </li>
                <li>
                    <div className='dieP2' id='die1'>
                    <span className={bolt}>2</span>
                    </div>
                    <div className='dieP2' id='die1'>
                    <span className={bolt}>3</span>
                    </div>
                    <div className='dieP2' id='die1'>
                    <span className={heart}>4</span>
                    </div>
                    <div className='dieP2' id='die1'>
                    <span className={heart}>5</span>
                    </div>
                    <div className='dieP2' id='die1'>
                    <span className={bolt}>1</span>
                    </div>
                    <p>A small straight results in 5 damage to the opponent and 1 HP for the current player.</p>
                </li>
                <li>
                    <div className='dieP1' id='die1'>
                    <span className={bolt}>1</span>
                    </div>
                    <div className='dieP1' id='die1'>
                    <span className={bolt}>1</span>
                    </div>
                    <div className='dieP1' id='die1'>
                    <span className={bolt}>3</span>
                    </div>
                    <div className='dieP1' id='die1'>
                    <span className={bolt}>2</span>
                    </div>
                    <div className='dieP1' id='die1'>
                    <span className={bolt}>1</span>
                    </div>
                    <p>3 lighting bolts results in 5 damage, and each additional bolt adds 1 damage, so this roll would deal 7 damge to your opponent.</p>
                </li>
                <li>
                    <div className='dieP2' id='die1'>
                    <span className={heart}>4</span>
                    </div>
                    <div className='dieP2' id='die1'>
                    <span className={heart}>4</span>
                    </div>
                    <div className='dieP2' id='die1'>
                    <span className={heart}>4</span>
                    </div>
                    <div className='dieP2' id='die1'>
                    <span className={heart}>5</span>
                    </div>
                    <div className='dieP2' id='die1'>
                    <span className={heart}>5</span>
                    </div>
                    <p>3 hearts results in 1 HP, and each additional heart adds 1 HP, so this roll would give you 5 more HP.</p>
                </li>
            </ul>

        </div>
    )
}

const mapStateToProps = state => {
    return{
        loggedIn: state.manageGame.loggedIn
    }
}

export default connect(mapStateToProps)(Rules)