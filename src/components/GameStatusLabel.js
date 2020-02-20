import React from "react";
import {GameStatusColor, GameStatusLabels} from "../constants/GameConstants";

const GameStatusLabel = props => {
    return <span style={{color: GameStatusColor[props.gameStatus] || 'black'}}>
        {GameStatusLabels[props.gameStatus] || ''}
    </span>
};

export default GameStatusLabel;