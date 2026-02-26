import { createSlice } from "@reduxjs/toolkit";

const askPilotSlice = createSlice({
  name: "askPilot",
  initialState: {
    askPilotState: false,
    movieNames: null,
    movieResult: null,
  },
  reducers: {
    toogleAskPilot: (state) => {
      state.askPilotState = !state.askPilotState;
    },
    addPilotMovies: (state, action) => {
      const { movieNames, movieResult } = action.payload;
      state.movieNames = movieNames;
      state.movieResult = movieResult;
    },
  },
});

export const { toogleAskPilot, addPilotMovies } = askPilotSlice.actions;

export default askPilotSlice.reducer;
