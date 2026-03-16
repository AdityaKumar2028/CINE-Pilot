import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  const hasPoster = movies.some((movie) => movie.poster_path);

  return (
    <div className="p-3">
      <div className="text-white text-xl md:text-2xl font-bold mb-3">
        {hasPoster && title}
      </div>

      <div className="flex overflow-x-scroll gap-4 overflow-y-hidden scrollbar-hide">
        {movies.map((data) => (
          <Link key={data.id} to={`/movie/${data.id}`} className="shrink-0">
            <MovieCard movieData={data} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
