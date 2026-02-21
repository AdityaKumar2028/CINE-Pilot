import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const SecondaryBrowse = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return;
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    movies;
  return (
    <div className="-mt-40 relative z-20">
      <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
      <MovieList title={"Popular"} movies={topRatedMovies} />
      <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
      <MovieList title={"Trending"} movies={popularMovies} />
    </div>
  );
};

export default SecondaryBrowse;
