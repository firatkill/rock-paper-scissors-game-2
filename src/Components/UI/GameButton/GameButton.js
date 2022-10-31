import React from "react";
import GameButtonCSS from "./GameButton.module.css";
import {
  FaHandRock,
  FaHandPaper,
  FaHandScissors,
  FaHandLizard,
  FaHandSpock,
} from "react-icons/fa";
function GameButton(props) {
  const styled = GameButtonCSS;
  return (
    <div
      id={props.type}
      onClick={props.onClick}
      type={props.type}
      highlight={props.highlight}
      clickable={props.onClick !== undefined ? "clickable" : "notClickable"}
      className={`${styled.GameButtonContainer} ${props.className}`}
    >
      <div className={styled.iconDiv}>
        {props.type === "rock" && (
          <FaHandRock className={styled.characterIcon} />
        )}
        {props.type === "paper" && (
          <FaHandPaper className={styled.characterIcon} />
        )}
        {props.type === "scissors" && (
          <FaHandScissors className={styled.characterIcon} />
        )}
        {props.type === "lizard" && (
          <FaHandLizard className={styled.characterIcon} />
        )}
        {props.type === "spock" && (
          <FaHandSpock className={styled.characterIcon} />
        )}
      </div>
    </div>
  );
}

export default GameButton;
