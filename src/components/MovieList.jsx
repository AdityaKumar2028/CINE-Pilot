import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  const hasPoster = movies.some((movie) => movie.poster_path);

  return (
    <div className="movie-container p-3">
      <div className="Heading-title text-white text-2xl font-bold mb-4 w-full">
        {hasPoster && title}
      </div>

      <div className="movieList flex overflow-x-scroll gap-4 overflow-y-hidden scrollbar-hide">
        {movies.map((data) => (
          <Link key={data.id} to={`/movie/${data.id}`}>
            <MovieCard movieData={data} key={data.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
