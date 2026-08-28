import { useSelector } from "react-redux";
import MovieList from "../Movies/MovieList";
import Shimmer from "../UI/Shimmer";

const SecondaryBrowse = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return <Shimmer />;

  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    movies;

  return (
    <div className="relative z-20 -mt-8 px-2 sm:-mt-12 md:-mt-20 lg:-mt-28">
      <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
      <MovieList title={"Popular"} movies={topRatedMovies} />
      <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
      <MovieList title={"Trending"} movies={popularMovies} />
    </div>
  );
};

export default SecondaryBrowse;
