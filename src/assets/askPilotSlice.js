import { createSlice } from "@reduxjs/toolkit";

const askPilotSlice = createSlice({
  name: "askPilot",
  initialState: {
    askPilotState: false,
  },
  reducers: {
    toogleAskPilot: (state) => {
      state.askPilotState = !state.askPilotState;
    },
  },
});

export const { toogleAskPilot } = askPilotSlice.actions;

export default askPilotSlice.reducer;
