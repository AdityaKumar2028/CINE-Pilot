import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const SecondaryBrowse = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return;
  const { nowPlayingMovies, popularMovies, topRatedMovies } = movies;
  return (
    <div className="-mt-54 relative z-20">
      <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
      <MovieList title={"Trending"} movies={popularMovies} />
      <MovieList title={"Popular"} movies={topRatedMovies} />
      {/* <MovieList title={"Upcoming Movies"} movies={movies} />
      <MovieList title={"Horror"} movies={movies} /> */}
    </div>
  );
};

export default SecondaryBrowse;
