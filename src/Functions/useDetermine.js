import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { gameActions } from "../redux/game-slice";
export const useDetermine = (e) => {
  const dispatch = useDispatch();
  const playerSelection = useSelector((state) => state.game.playerSelection);
  const computerSelection = useSelector(
    (state) => state.game.computerSelection
  );
  const isSelecting = useSelector((state) => state.game.isSelecting);
  const gameMode = useSelector((state) => state.game.gameMode);

  if (!isSelecting) {
    if (gameMode === "classic") {
      //playerWins in classic mode
      if (playerSelection === computerSelection) {
        dispatch(gameActions.assignResultText("DRAW"));
      } else if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper")
      ) {
        dispatch(gameActions.assignResultText("YOU WIN !!"));
      } else if (
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "rock")
      ) {
        dispatch(gameActions.assignResultText("COMPUTER WINS !!"));
      }
    } else if (gameMode === "advanced") {
      if (playerSelection === computerSelection) {
        dispatch(gameActions.assignResultText("DRAW"));
      } else if (
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "lizard") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "spock") ||
        (playerSelection === "rock" && computerSelection === "lizard") ||
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "lizard" && computerSelection === "spock") ||
        (playerSelection === "lizard" && computerSelection === "paper") ||
        (playerSelection === "spock" && computerSelection === "scissors") ||
        (playerSelection === "spock" && computerSelection === "rock")
      ) {
        dispatch(gameActions.assignResultText("YOU WIN !!"));
      } else {
        dispatch(gameActions.assignResultText("COMPUTER WINS !!"));
      }
    }
    return "null";
  }
};
