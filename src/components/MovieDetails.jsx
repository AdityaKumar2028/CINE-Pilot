import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { useSelector } from "react-redux";
import MovieDetailsTrailer from "./MovieDetailsTrailer";
import { useState } from "react";

const MovieDetails = () => {
  const { id } = useParams();
  const [current, setCurrent] = useState(0);

  useMovieDetails(id);

  const trailer = useSelector((store) => store.movies.movieDetailTrailer);
  if (!trailer) return null;

  const maxTrailers = Math.min(7, trailer.length);
  const buttonValidity = trailer.length > 1;

  const moveLeft = () =>
    setCurrent((prev) => (prev - 1 + maxTrailers) % maxTrailers);
  const moveRight = () => setCurrent((prev) => (prev + 1) % maxTrailers);

  return (
    <div className="bg-black min-h-screen px-4 py-6">
      <div className="max-w-2xl mx-auto">
        <MovieDetailsTrailer trailerKey={trailer[current].key} />

        {buttonValidity && (
          <div className="flex justify-between items-center mt-3">
            <button
              onClick={moveLeft}
              className="bg-white text-black px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-gray-200 transition"
            >
              ← Prev
            </button>
            <span className="text-gray-400 text-sm">
              {current + 1} / {maxTrailers}
            </span>
            <button
              onClick={moveRight}
              className="bg-white text-black px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-gray-200 transition"
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
