import React from "react";
import WelcomeBoxCSS from "./WelcomeBox.module.css";
function WelcomeBox() {
  const styled = WelcomeBoxCSS;
  return (
    <div className={styled.WelcomeBoxContainer}>
      <h1>Welcome to the Game! Please select a mode below:</h1>
    </div>
  );
}

export default WelcomeBox;
