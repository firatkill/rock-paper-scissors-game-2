import React from "react";
import ScoreTable from "../Components/UI/ScoreTable/ScoreTable";
import Game from "../Components/AdvancedGamePage/Game_Advanced/Game";
import RulesButton from "../Components/UI/RulesButton/RulesButton";
function AdvancedGamePage() {
  return (
    <div>
      <ScoreTable />
      <Game />
      <RulesButton />
    </div>
  );
}

export default AdvancedGamePage;
