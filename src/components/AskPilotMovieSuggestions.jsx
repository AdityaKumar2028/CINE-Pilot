import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const AskPilotMovieSuggestions = () => {
  const movies = useSelector((store) => store.askPilot);
  if (
    !movies ||
    !Array.isArray(movies.movieNames) ||
    !Array.isArray(movies.movieResult)
  ) {
    return null;
  }

  const { movieNames = [], movieResult = [] } = movies;

  return (
    <div className="w-full mt-6 sm:mt-8 space-y-4">
      {movieNames.map((movieName, index) => {
        const moviesData = movieResult[index];
        if (!moviesData || !Array.isArray(moviesData)) return null;

        return (
          <MovieList
            key={movieName || index}
            title={movieName}
            movies={moviesData}
          />
        );
      })}
    </div>
  );
};

export default AskPilotMovieSuggestions;
