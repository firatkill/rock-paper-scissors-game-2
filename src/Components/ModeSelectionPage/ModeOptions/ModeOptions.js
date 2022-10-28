import React from "react";
import ModeOptionsCSS from "./ModeOptions.module.css";
import { useDispatch } from "react-redux";
import { gameActions } from "../../../redux/game-slice";
import { Link } from "react-router-dom";
function ModeOptions() {
  const styled = ModeOptionsCSS;
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    dispatch(gameActions.assignGameMode(e.currentTarget.id));
  };
  return (
    <div className={styled.ModeOptionsContainer}>
      <Link to="/classic" className={styled.link}>
        <div
          id="classic"
          onClick={clickHandler}
          className={styled.classicModeContainer}
        >
          <h3>CLASSIC</h3>
          <p>Classic rock paper scissors game.</p>
        </div>
      </Link>
      <Link to="/advanced" className={styled.link}>
        <div
          id="advanced"
          onClick={clickHandler}
          className={styled.advancedModeContainer}
        >
          <h3>ADVANCED</h3>
          <p>
            2 more characters than classic game. Be sure you read the rules !
          </p>
        </div>
      </Link>
    </div>
  );
}

export default ModeOptions;
