import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const AskPilotMovieSuggestions = () => {
  const movies = useSelector((store) => store?.askPilot);
  if (!movies) return;
  const { movieNames, movieResult } = movies;
  if (!movieNames || !movieResult) return;

  return (
    <div>
      {movieNames.map((movieName, index) => (
        <MovieList title={movieName} movies={movieResult[index]} id={index} />
      ))}
    </div>
  );
};

export default AskPilotMovieSuggestions;
