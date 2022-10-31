import React from "react";
import GameCSS from "./Game.module.css";
import GameButton from "../../UI/GameButton/GameButton";
import RulesButton from "../../UI/RulesButton/RulesButton";
import ResultContainer from "../../UI/ResultContainer/ResultContainer";
import CharacterSelectionContainer from "./CharacterSelectionContainer/CharacterSelectionContainer";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../../../redux/game-slice";
function Game() {
  const styled = GameCSS;
  const dispatch = useDispatch();
  dispatch(gameActions.assignResultText("Wait for opponent !"));

  const isGameStarted = useSelector((state) => state.game.isGameStarted);
  const charactersArray = ["rock", "paper", "scissors"];
  return (
    <div className={styled.GameContainer}>
      {!isGameStarted && <CharacterSelectionContainer />}
      {isGameStarted && <ResultContainer charactersArray={charactersArray} />}
      <RulesButton />
    </div>
  );
}

export default Game;
