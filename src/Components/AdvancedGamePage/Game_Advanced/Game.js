import React from "react";
import GameCSS from "./Game.module.css";
import GameButton from "../../UI/GameButton/GameButton";
import CharacterSelectionContainer from "./CharacterSelectionContainer/CharacterSelectionContainer";
import ResultsContainer from "../../UI/ResultContainer/ResultContainer";
import { useSelector, useDispatch } from "react-redux";
import { gameActions } from "../../../redux/game-slice";
function Game() {
  const styled = GameCSS;
  const dispatch = useDispatch();
  dispatch(gameActions.assignResultText("Wait for opponent !"));

  const isGameStarted = useSelector((state) => state.game.isGameStarted);
  const charactersArray = ["rock", "paper", "scissors", "lizard", "spock"];
  return (
    <div className={styled.GameContainer}>
      {!isGameStarted && <CharacterSelectionContainer />}
      {isGameStarted && <ResultsContainer charactersArray={charactersArray} />}
    </div>
  );
}

export default Game;
