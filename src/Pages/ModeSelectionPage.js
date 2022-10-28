import React from "react";
import ModeOptions from "../Components/ModeSelectionPage/ModeOptions/ModeOptions";
import WelcomeBox from "../Components/ModeSelectionPage/WelcomeBox/WelcomeBox";
import RulesButton from "../Components/UI/RulesButton/RulesButton";
import Modal from "../Components/UI/Modal/Modal";
function ModeSelectionPage() {
  return (
    <div>
      <WelcomeBox />
      <ModeOptions />
      <RulesButton />
      <Modal />
    </div>
  );
}

export default ModeSelectionPage;
