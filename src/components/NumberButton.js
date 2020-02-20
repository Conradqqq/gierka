import React from "react";
import {NumberColor} from "../constants/GameConstants";

const NumberButton = props => (
    <button
        className="number"
        style={{backgroundColor: NumberColor[props.status]}}
        onClick={() => props.onClick(props.number)}>
        {props.number}
    </button>
);

export default NumberButton;