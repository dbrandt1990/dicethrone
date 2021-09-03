const initialDice = { rolls: 1, results: [0, 0, 0, 0, 0], clicked: [false, false, false, false, false] }
const initialGame = { turn: 'P1', P1HP: 20, P2HP: 20, won: false }
const initialUser = { username: '', password: '' }//may need to add games array and wins/rank here


export const manageDice = (state = initialDice, action) => {
    switch (action.type) {
        case 'CLICKED_DICE': {
            return state = {
                ...state,
                clicked: action.clicked
            }
        }
        case 'ROLL_DICE': {
            let newResults = [...state.results]
            let rollAttempts = state.rolls
            for (let i = 0; i < 5; i++) {
                if (action.toRoll[i]) {
                    const num = (Math.floor(Math.random() * 6) + 1)
                    newResults[i] = num
                } else { newResults[i] = state.results[i] }
            }
            //check if actuallly rolled to prevent accidental roll clicks
            if (JSON.stringify(state.results) !== JSON.stringify(newResults)) {
                if (rollAttempts === 3) {
                    document.querySelector('#finishTurn').className = 'finishHighlight'
                }
                rollAttempts++
            }
            return state = {
                rolls: rollAttempts,
                results: newResults,
                clicked: [false, false, false, false, false]
            }
        }

        case 'RESET_DICE': {
            return state = initialDice
        }
        default:
            return state
    }
}

export const manageGame = (state = initialGame, action) => {
    switch (action.type) {
        case 'RESOLVE_DICE': {
            let opponentHP = state.turn === 'P1' ? state.P2HP : state.P1HP
            let attackerHP = state.turn === 'P1' ? state.P1HP : state.P2HP
            let results = JSON.stringify(action.results.sort())
            let set = new Set(action.results)
            let smStraightSetCheck = Array.from(set)
            let a = 0 //1-3
            let b = 0 //4-5
            let count = 0 //smStraight count


            console.log('RESOLV_DICE called', results)

            if (smStraightSetCheck[3]) {
                smStraightSetCheck.forEach((num, i) => {
                    if (num + 1 === smStraightSetCheck[i + 1]) {
                        count++
                    }
                })

                if (count === 3) {
                    console.log('small straight = 5dmg + 1hp')
                    opponentHP = opponentHP - 5
                    attackerHP = attackerHP + 1
                }
            }

            if (results === JSON.stringify([6, 6, 6, 6, 6])) {
                console.log('6 X5 = 18dmg')
                opponentHP = opponentHP - 18
            } else if (results === JSON.stringify([1, 2, 3, 4, 5]) || results === JSON.stringify([2, 3, 4, 5, 6])) {
                console.log('lg straight = 7dmg + 2hp')
                opponentHP = opponentHP - 7
                attackerHP = attackerHP + 2
            } else if (count < 4) {
                action.results.forEach((num) => {
                    if (num === 1 || num === 2 || num === 3) {
                        a++
                        console.log('a', a)
                    } else if (num === 4 || num === 5) {
                        b++
                        console.log('b', b)
                    }
                })

                if (a > 2) {
                    let damage = (a + 5) - 3
                    console.log('1-3 damage', damage)
                    opponentHP = opponentHP - damage
                } else if (b > 2) {
                    let heal = (b + 1) - 3
                    console.log('4-5 heal', heal)
                    attackerHP = attackerHP + heal
                }
            }

            if (state.turn === 'P1') {
                console.log('opp', opponentHP)
                console.log('att', attackerHP)
                return (state = {
                    ...state,
                    P1HP: attackerHP,
                    P2HP: opponentHP
                })
            } else {
                console.log('opp', opponentHP)
                console.log('att', attackerHP)
                return (state = {
                    ...state,
                    P1HP: opponentHP,
                    P2HP: attackerHP
                })
            }
        }
        case 'NEXT_TURN': {
            if (state.turn === 'P1') {
                return (state = {
                    ...state,
                    turn: 'P2'
                })
            } else {
                return (state = {
                    ...state,
                    turn: 'P1'
                })
            }

        }
        case 'WIN_GAME': {
            if (state.P1HP <= 0 || state.P2HP <= 0) {
                return (state = {
                    ...state,
                    won: true
                })
            }
        }
        default:
            return state
    }

}

export const manageUsers = (state = initialUser, action) => {
    switch (action.type) {
        case 'SIGN_UP': {
            const SIGNUP_URL = "http://localhost:3000/api/user"
            let username = action.username
            let password_digest = action.password
            const bodyData = { username, password_digest }
            const data = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bodyData)
            }

            fetch(SIGNUP_URL, data)
                .then(response => response.json())
                .then(user => {
                    if (user) { alert('user created') }
                    console.log('db data', user)
                    return user
                })
        }
        case 'SIGN_IN': {
            return {}
        }
        default:
            return state
    }
}



