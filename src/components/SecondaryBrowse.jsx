import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryBrowse = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return null;

  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    movies;

  return (
    <div className="relative z-20 bg-black pt-6 md:pt-12">
      <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
      <MovieList title={"Popular"} movies={popularMovies} />
      <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
      <MovieList title={"Trending"} movies={topRatedMovies} />
    </div>
  );
};

export default SecondaryBrowse;
