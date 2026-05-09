import { createSlice } from "@reduxjs/toolkit";

const askPilotSlice = createSlice({
  name: "askPilot",
  initialState: {
    askPilotState: false,
    movieNames: null,
    movieResult: null,
    isLoading: false,
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
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { addAskPilotState, addPilotMovies, setIsLoading } =
  askPilotSlice.actions;

export default askPilotSlice.reducer;
