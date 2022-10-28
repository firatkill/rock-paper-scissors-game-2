import { createSlice } from "@reduxjs/toolkit";
const uiSlice = createSlice({
  name: "ui",
  initialState: { isModalOpen: false },
  reducers: {
    modalSwitch(state) {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});
export default uiSlice;

export const uiActions = uiSlice.actions;
