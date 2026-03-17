import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!Array.isArray(movies) || movies.length === 0) return null;
  const safeMovies = movies.filter((movie) => movie && movie.poster_path);

  if (safeMovies.length === 0) return null;

  return (
    <div className="w-full px-2 sm:px-3 py-2">
      <h2 className="text-white text-base sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 px-1 capitalize">
        {title}
      </h2>

      <div
        className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {safeMovies.map((data, index) => (
          <Link
            key={data?.id || index}
            to={`/movie/${data.id}`}
            className="shrink-0 block"
          >
            <MovieCard movieData={data} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
