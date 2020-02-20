import React, {useEffect} from "react";
import NumberButton from "./NumberButton";
import GameStatusLabel from "./GameStatusLabel";
import StarsDisplay from "./StarsDisplay";
import utils from "../utils/utils";
import NumberStatus from "../constants/GameConstants";
import {connect} from "react-redux";
import * as gameActions from "../redux/actions/gameActions";
import PropTypes from 'prop-types';

const StarMatch = (props) => {
    const numberStatus = (number) => {
        if (!props.availableNumbers.includes(number)) {
            return NumberStatus.USED;
        } else if (props.candidates.includes(number)) {
            const candidatesAreWrong = utils.sum(props.candidates) > props.starsCount;
            return candidatesAreWrong ? NumberStatus.WRONG : NumberStatus.CANDIDATE;
        }

        return NumberStatus.AVAILABLE;
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (props.gameStatus !== "end") {
                const newTimeLeft = props.timeLeft - 1;
                props.updateTimeLeft(newTimeLeft);
                if (newTimeLeft === 0) {
                    props.updateGameStatus("end");
                    clearTimeout(timer);
                }
            }
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="game">
            <div className="help">
                <GameStatusLabel gameStatus={props.gameStatus} />
            </div>
            <div className="body">
                <div className="left">
                    <StarsDisplay
                        starsCount={props.starsCount}
                        gameStatus={props.gameStatus}
                        resetGame={props.resetGame}/>
                </div>
                <div className="right">
                    {
                        utils.range(1, 9).map(number =>
                            <NumberButton
                                key={number}
                                number={number}
                                status={numberStatus(number)}
                                onClick={props.selectNumber}
                            />)
                    }
                </div>
            </div>
            <div className="timer">
                Time left: {props.timeLeft}
            </div>
        </div>
    );
};

StarMatch.propTypes = {
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        availableNumbers: state.gameReducer.availableNumbers,
        starsCount: state.gameReducer.starsCount,
        candidates: state.gameReducer.candidates,
        gameStatus: state.gameReducer.gameStatus,
        timeLeft: state.gameReducer.timeLeft,
        key: state.gameReducer.gameKey,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        updateGameStatus: (gameStatus) => dispatch(gameActions.updateGameStatus(gameStatus)),
        updateTimeLeft: (timeLeft) => dispatch(gameActions.updateTimeLeft(timeLeft)),
        selectNumber: (number) => dispatch(gameActions.selectNumber(number)),
        resetGame: () => dispatch(gameActions.resetGame()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StarMatch);