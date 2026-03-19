import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { useSelector } from "react-redux";
import MovieDetailsTrailer from "./MovieDetailsTrailer";
import { useState, useEffect } from "react";
import { StatBadge } from "./StatBadge";

const MovieDetails = () => {
  const { id } = useParams();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setCurrent(0);
  }, [id]);

  useMovieDetails(id);

  const trailer = useSelector((s) => s.movies.movieDetailTrailer);
  const movieData = useSelector((s) => s.movies.movieCardData);

  if (!trailer || !movieData) return null;

  const max = Math.min(7, trailer.length);
  const move = (dir) => setCurrent((p) => (p + dir + max) % max);

  return (
    <div className="bg-black min-h-screen text-white px-4 sm:px-6 lg:px-8 w-full pt-20 pb-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 sm:mb-8 text-center sm:text-left">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            {movieData.title}
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-red-600 to-transparent mt-4 rounded-full mx-auto sm:mx-0" />
        </div>

        <MovieDetailsTrailer
          trailerKey={trailer[current]?.key}
          trailerDetails={trailer[current]}
        />

        {trailer.length > 1 && (
          <div className="flex justify-between items-center mt-4 sm:mt-6 gap-2">
            <button
              onClick={() => move(-1)}
              className="flex-shrink-0 text-xs sm:text-sm font-medium px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl border border-white/10 hover:bg-red-600 hover:border-red-600 transition-all"
            >
              ← Prev
            </button>

            <div className="flex gap-1.5 sm:gap-2 overflow-x-auto px-2 py-1">
              {Array.from({ length: max }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to trailer ${i + 1}`}
                  className={`rounded-full cursor-pointer h-2 sm:h-2.5 transition-all duration-300 ${
                    i === current
                      ? "w-6 sm:w-8 bg-red-500"
                      : "w-2 sm:w-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => move(1)}
              className="flex-shrink-0 text-xs sm:text-sm font-medium px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl border border-white/10 hover:bg-red-600 hover:border-red-600 transition-all"
            >
              Next →
            </button>
          </div>
        )}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-10">
          <StatBadge
            icon="🔥"
            label="Popularity"
            value={movieData.popularity}
          />
          <StatBadge icon="⭐" label="Rating" value={movieData.vote_average} />
          <StatBadge
            icon="🗳️"
            label="Votes"
            value={movieData.vote_count?.toLocaleString()}
          />
        </div>
        <div className="mt-8 sm:mt-10 bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-8">
          <h3 className="text-lg sm:text-xl font-bold mb-3 text-white/90">
            Overview
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {movieData.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
