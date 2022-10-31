import React from "react";
import ScoreTable from "../Components/UI/ScoreTable/ScoreTable";
import Game from "../Components/ClassicGamePage/Game_Classic/Game";
function ClassicGamePage() {
  return (
    <div>
      <ScoreTable />
      <Game />
    </div>
  );
}

export default ClassicGamePage;
