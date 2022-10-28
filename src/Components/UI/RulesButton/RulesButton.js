import React from "react";
import RulesButtonCSS from "./RulesButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../../redux/ui-slice";
function RulesButton() {
  const styled = RulesButtonCSS;
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(uiActions.modalSwitch());
  };
  return (
    <div onClick={openModal} className={styled.RulesButton}>
      RULES
    </div>
  );
}

export default RulesButton;
