import React from "react";

const NumberColor = {
    'available': 'lightgray',
    'used': 'lightgreen',
    'wrong': 'lightcoral',
    'candidate': 'deepskyblue',
};

const NumberButton = props => (
    <button
        className="number"
        style={{backgroundColor: NumberColor[props.status]}}
        onClick={() => props.onClick(props.number)}>
        {props.number}
    </button>
);

export default NumberButton;