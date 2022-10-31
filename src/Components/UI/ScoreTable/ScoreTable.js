import React, { useEffect, useState } from "react";
import ScoreTableCSS from "./ScoreTable.module.css";
import { useSelector } from "react-redux";

function ScoreTable() {
  const styled = ScoreTableCSS;

  const resultText = useSelector((state) => state.game.resultText);
  const gameMode = useSelector((state) => state.game.gameMode);
  const isSelecting = useSelector((state) => state.game.isSelecting);
  const [score, setScore] = useState(0);
  useEffect(() => {
    if (!isSelecting) {
      if (resultText === "YOU WIN !!") {
        setScore((score) => score + 1);
      } else if (resultText === "COMPUTER WINS !!") {
        setScore((score) => score - 1);
      }
    }
  }, [resultText, isSelecting]);
  return (
    <div className={styled.ScoreTableContainer}>
      <div className={styled.brand}>
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
        {gameMode === "advanced" && (
          <>
            <span>LIZARD</span>
            <span>SPOCK</span>
          </>
        )}
      </div>
      <div className={styled.scoreBox}>
        <span className={styled.scoreBox_text}>SCORE</span>
        <span className={styled.scoreBox_score}>{score}</span>
      </div>
    </div>
  );
}

export default ScoreTable;
