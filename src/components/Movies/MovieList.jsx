import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useDispatch } from "react-redux";
import { addMovieCardData } from "../../assets/movieSlice";

const MovieList = ({ title, movies }) => {
  const dispatch = useDispatch();
  if (!Array.isArray(movies) || movies.length === 0) return null;
  const safeMovies = movies.filter((movie) => movie && movie.poster_path);

  if (safeMovies.length === 0) return null;
  function handleClick(data) {
    if (!data) return null;
    dispatch(addMovieCardData(data));
  }

  return (
    <section className="w-full px-3 py-3 sm:px-4 sm:py-4">
      <h2 className="mb-2 px-1 text-base font-bold capitalize text-white sm:mb-3 sm:text-xl md:text-2xl">
        {title}
      </h2>

      <div
        className="flex snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain pb-3 pr-3 [scrollbar-width:none] touch-pan-x sm:gap-3 md:gap-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {safeMovies.map((data, index) => (
          <Link
            key={data?.id || index}
            to={`/movie/${data.id}`}
            onClick={() => handleClick(data)}
            className="block shrink-0 snap-start rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            <MovieCard movieData={data} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MovieList;
