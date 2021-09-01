import DiceContainer from "./DiceContainer";
import PlayersContainer from "./PlayersContainer";
import React from "react";

class GameContainer extends React.Component {
    render() {
        return (
            <div id="gameContainer" >
                <DiceContainer />
                <PlayersContainer />
            </div>
        )
    }
}

export default GameContainer;
