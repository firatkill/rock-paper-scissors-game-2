import React, { useEffect, useState, useCallback } from "react";
import ResultContainerCSS from "./ResultContainer.module.css";
import GameButton from "../GameButton/GameButton";
import { useDetermine } from "../../../Functions/useDetermine";
import { gameActions } from "../../../redux/game-slice";
import { useDispatch, useSelector } from "react-redux";

function ResultContainer(props) {
  const styled = ResultContainerCSS;
  const playerSelection = useSelector((state) => state.game.playerSelection);

  const [times, setTimes] = useState(0);

  const resultText = useSelector((state) => state.game.resultText);
  const [selected, setSelected] = useState(
    Math.round(Math.random() * props.charactersArray.length - 1)
  );
  const computerSelection = useSelector(
    (state) => state.game.computerSelection
  );
  const startingIndex = useCallback((payload) => {
    if (payload === 0) {
      setSelected(0);
    } else {
      setSelected((selected) => selected + payload);
    }
  }, []);
  const plusTimes = useCallback(() => {
    setTimes((times) => times + 1);
  }, []);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(gameActions.gameStateSwitch());
    dispatch(gameActions.resetGame());
  };
  const determine = useDetermine();

  useEffect(() => {
    if (times < 10) {
      dispatch(gameActions.selectingStarted());
      let myInterval = setInterval(() => {
        dispatch(
          gameActions.assignComputerSelection(props.charactersArray[selected])
        );
        plusTimes();
        if (selected === props.charactersArray.length - 1) {
          startingIndex(0);
        } else {
          startingIndex(1);
        }
      }, 100);
      if (times === 9) {
        return () => {
          dispatch(gameActions.selectingDone());
          clearInterval(myInterval);
        };
      }
      return () => {
        clearInterval(myInterval);
      };
    }
  }, [
    times,
    dispatch,
    props.charactersArray,
    selected,
    plusTimes,
    startingIndex,
  ]);

  return (
    <div className={styled.ResultContainer}>
      <GameButton
        highlight={resultText === "YOU WIN !!" ? "true" : "false"}
        className={styled.playerSelection}
        type={playerSelection}
      />
      <div className={styled.playAgainButton}>
        <h1>{resultText}</h1>
        <button onClick={clickHandler}>Play Again</button>
      </div>
      <GameButton
        highlight={resultText === "COMPUTER WINS !!" ? "true" : "false"}
        className={styled.computerSelection}
        type={computerSelection}
      />
    </div>
  );
}

export default ResultContainer;
