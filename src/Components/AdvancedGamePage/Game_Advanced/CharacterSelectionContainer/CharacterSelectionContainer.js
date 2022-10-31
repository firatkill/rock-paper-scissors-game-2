import React from "react";
import CharacterSelectionContainerCSS from "./CharacterSelectionContainer.module.css";
import GameButton from "../../../UI/GameButton/GameButton";
import { useSelector, useDispatch } from "react-redux";
import { gameActions } from "../../../../redux/game-slice";

function CharacterSelectionContainer() {
  const styled = CharacterSelectionContainerCSS;
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    dispatch(gameActions.assignPlayerSelection(e.currentTarget.id));
    dispatch(gameActions.gameStateSwitch());
  };
  return (
    <div className={styled.gameBox}>
      <GameButton
        onClick={clickHandler}
        className={styled.firstCharacter}
        type="rock"
      />
      <GameButton
        onClick={clickHandler}
        className={styled.secondCharacter}
        type="paper"
      />
      <GameButton
        onClick={clickHandler}
        className={styled.thirdCharacter}
        type="scissors"
      />
      <GameButton
        onClick={clickHandler}
        className={styled.fourthCharacter}
        type="spock"
      />
      <GameButton
        onClick={clickHandler}
        className={styled.fifthCharacter}
        type="lizard"
      />
    </div>
  );
}

export default CharacterSelectionContainer;
