import React from "react";
import GameButton from "../../../UI/GameButton/GameButton";
import CharacterSelectionContainerCSS from "./CharacterSelectionContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
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
    </div>
  );
}

export default CharacterSelectionContainer;
