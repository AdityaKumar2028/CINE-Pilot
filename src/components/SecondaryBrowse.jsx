import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryBrowse = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return;

  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    movies;

  return (
    <div className="relative z-20 mt-4 md:-mt-80 px-2">
      <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
      <MovieList title={"Popular"} movies={topRatedMovies} />
      <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
      <MovieList title={"Trending"} movies={popularMovies} />
    </div>
  );
};

export default SecondaryBrowse;
