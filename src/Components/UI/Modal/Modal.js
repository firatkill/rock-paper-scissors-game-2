import React from "react";
import ModalCSS from "./Modal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../../redux/ui-slice";
import { useParams } from "react-router-dom";
function Modal() {
  const styled = ModalCSS;
  const isModalOpen = useSelector((state) => state.ui.isModalOpen);
  const dispatch = useDispatch();
  const gameMode = useSelector((state) => state.game.gameMode);
  const closeModal = () => {
    dispatch(uiActions.modalSwitch());
  };
  if (!isModalOpen) {
    return null;
  }
  return (
    <div className={styled.modal}>
      <div className={styled.modal_content}>
        <button onClick={closeModal} className={styled.closeButton}>
          X
        </button>
        {gameMode === "classic" || gameMode === "" ? (
          <div className={styled.modal_content__imgDiv}>
            <img alt="rules" src="/image-rules.svg" />
          </div>
        ) : null}
         
        {gameMode === "advanced" || gameMode === "" ? (
          <div className={styled.modal_content__imgDiv}>
            <img alt="rules" src="/image-rules-bonus.svg" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Modal;
