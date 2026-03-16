import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  const hasPoster = movies.some((movie) => movie.poster_path);

  return (
    <div className="px-6 py-3">
      {hasPoster && (
        <h2 className="text-white text-2xl font-bold mb-4">{title}</h2>
      )}

      <div className="flex overflow-x-scroll gap-4 scrollbar-hide">
        {movies.map((data) => (
          <Link key={data.id} to={`/movie/${data.id}`}>
            <MovieCard movieData={data} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
