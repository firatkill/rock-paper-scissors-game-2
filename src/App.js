import { Routes, Route } from "react-router-dom";
import ModeSelectionPage from "./Pages/ModeSelectionPage";
import ClassicGamePage from "./Pages/ClassicGamePage";
import AdvancedGamePage from "./Pages/AdvancedGamePage";
import NotFoundPage from "./Pages/NotFoundPage";
import { useSelector } from "react-redux";
function App() {
  const gameMode = useSelector((state) => state.game.gameMode);

  return (
    <Routes>
      <Route path="/" element={<ModeSelectionPage />}></Route>
      {gameMode !== "" && (
        <>
          <Route path="/classic" element={<ClassicGamePage />}></Route>
          <Route path="/advanced" element={<AdvancedGamePage />}></Route>
        </>
      )}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
