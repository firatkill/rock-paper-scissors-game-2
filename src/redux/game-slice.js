import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: { gameMode: "" },
  reducers: {
    assignGameMode(state, action) {
      state.gameMode = action.payload;
    },
  },
});

export default gameSlice;

export const gameActions = gameSlice.actions;
