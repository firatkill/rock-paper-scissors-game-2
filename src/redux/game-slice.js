import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    gameMode: "",
    isGameStarted: false,
    playerSelection: "",
    computerSelection: "",
    resultText: "Wait for the Opponent!",
    isSelecting: false,
  },
  reducers: {
    assignGameMode(state, action) {
      state.gameMode = action.payload;
    },
    gameStateSwitch(state) {
      state.isGameStarted = !state.isGameStarted;
    },
    assignPlayerSelection(state, action) {
      state.playerSelection = action.payload;
    },
    assignComputerSelection(state, action) {
      state.computerSelection = action.payload;
    },
    assignResultText(state, action) {
      state.resultText = action.payload;
    },
    selectingStarted(state) {
      state.isSelecting = true;
    },
    selectingDone(state) {
      state.isSelecting = false;
    },

    resetGame(state) {
      state.isGameStarted = false;
      state.playerSelection = "";
      state.computerSelection = "";
      state.resultText = "Wait for the Opponent!";
    },
  },
});

export default gameSlice;

export const gameActions = gameSlice.actions;
