import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { useSelector } from "react-redux";
import MovieDetailsTrailer from "./MovieDetailsTrailer";
import { useState, useEffect } from "react";
const MovieDetails = () => {
  const { id } = useParams();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setCurrent(0);
  }, [id]);

  useMovieDetails(id);

  const trailer = useSelector((store) => store.movies.movieDetailTrailer);
  if (!trailer) return null;

  const maxTrailers = Math.min(7, trailer.length);
  const buttonValidity = trailer.length > 1;

  const moveLeft = () =>
    setCurrent((prev) => (prev - 1 + maxTrailers) % maxTrailers);
  const moveRight = () => setCurrent((prev) => (prev + 1) % maxTrailers);

  return (
    <div className="bg-black min-h-screen px-4 py-2">
      <div
        className="mx-auto w-full
                    max-w-sm
                    md:max-w-4xl xl:max-w-5xl"
      >
        <MovieDetailsTrailer
          trailerKey={trailer[current]?.key}
          trailerDetails={trailer[current]}
        />

        {buttonValidity && (
          <div className="flex justify-between items-center px-1 z-10">
            <button
              onClick={moveLeft}
              className="bg-white text-black px-4 py-1.5 rounded-lg text-sm font-semibold
                       hover:bg-gray-200 transition md:px-6 md:py-2 md:text-base"
            >
              ← Prev
            </button>
            <span className="text-gray-400 text-sm md:text-base">
              {current + 1} / {maxTrailers}
            </span>
            <button
              onClick={moveRight}
              className="bg-white text-black px-4 py-1.5 rounded-lg text-sm font-semibold
                       hover:bg-gray-200 transition md:px-6 md:py-2 md:text-base"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
