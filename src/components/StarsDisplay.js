import React from "react";
import utils from "../utils/utils";
import {GameStatus} from "../constants/GameConstants";

const StarsDisplay = props => {
    {
        if (props.gameStatus === GameStatus.END) {
            return <button className="game-done" onClick={props.resetGame}>
                Play again
            </button>
        } else {
            return utils.range(1, props.starsCount).map(number =>
                <div
                    key={number}
                    className="star" />
            )
        }
    }
};

export default StarsDisplay;