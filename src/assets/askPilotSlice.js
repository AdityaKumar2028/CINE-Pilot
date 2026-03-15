import { createSlice } from "@reduxjs/toolkit";

const askPilotSlice = createSlice({
  name: "askPilot",
  initialState: {
    askPilotState: false,
    movieNames: null,
    movieResult: null,
  },
  reducers: {
    addAskPilotState: (state, action) => {
      state.askPilotState = action.payload;
    },
    addPilotMovies: (state, action) => {
      const { movieNames, movieResult } = action.payload;
      state.movieNames = movieNames;
      state.movieResult = movieResult;
    },
  },
});

export const { addAskPilotState, addPilotMovies } = askPilotSlice.actions;

export default askPilotSlice.reducer;
