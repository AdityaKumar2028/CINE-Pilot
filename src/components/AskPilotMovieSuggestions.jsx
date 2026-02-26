import React from "react";
import { useSelector } from "react-redux";

const AskPilotMovieSuggestions = () => {
  const movies = useSelector((store) => store?.askPilot);
  if (!movies) return;
  console.log(movies.movieName);
  console.log(movies.movieResult);
  return <div>AskPilotMovieSuggestions</div>;
};

export default AskPilotMovieSuggestions;
