import { useSelector } from "react-redux";
import MovieList from "../Movies/MovieList";
import Shimmer from "../UI/Shimmer";

const AskPilotMovieSuggestions = () => {
  const {
    isLoading,
    movieNames = [],
    movieResult = [],
  } = useSelector((store) => store.askPilot);

  console.log(movieNames, movieResult);

  if (isLoading) return <Shimmer />;

  if (!Array.isArray(movieNames) || !Array.isArray(movieResult)) {
    return null;
  }

  return (
    <div className="w-full mt-6 sm:mt-8 space-y-4">
      {movieNames.map((movieName, index) => {
        const moviesData = movieResult[index] || [];

        return (
          <MovieList
            key={movieName || index}
            title={movieName}
            movies={Array.isArray(moviesData) ? moviesData : []}
          />
        );
      })}
    </div>
  );
};

export default AskPilotMovieSuggestions;
