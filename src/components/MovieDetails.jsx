import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { useSelector } from "react-redux";
import MovieDetailsTrailer from "./MovieDetailsTrailer";
import { useState, useEffect } from "react";

const StatBadge = ({ label, value, icon }) => (
  <div className="flex flex-col items-center flex-1 bg-white/5 border border-white/10 rounded-xl py-3 hover:border-red-500/40 transition-colors">
    <span>{icon}</span>
    <span className="text-white font-bold mt-1">
      {typeof value === "number" ? value.toFixed(1) : value}
    </span>
    <span className="text-gray-500 text-xs uppercase tracking-wider">
      {label}
    </span>
  </div>
);

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
    <div className="bg-black min-h-screen text-white px-4 sm:px-6 w-full mt-10">
      <div className="pt-6 pb-4">
        <h1 className="text-2xl sm:text-5xl font-extrabold">
          {movieData.title}
        </h1>
        <div className="h-px bg-gradient-to-r from-red-600 to-transparent mt-4" />
      </div>

      <MovieDetailsTrailer
        trailerKey={trailer[current]?.key}
        trailerDetails={trailer[current]}
      />

      {trailer.length > 1 && (
        <div className="flex justify-between items-center mt-3">
          <button
            onClick={() => move(-1)}
            className="text-sm cursor-pointer px-4 py-2 rounded-xl border border-white/10 hover:bg-red-600 transition-all"
          >
            ← Prev
          </button>
          <div className="flex gap-1.5">
            {Array.from({ length: max }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full cursor-pointer h-2 transition-all ${i === current ? "w-5 bg-red-500" : "w-2 bg-white/30"}`}
              />
            ))}
          </div>
          <button
            onClick={() => move(1)}
            className="text-sm px-4 py-2 cursor-pointer rounded-xl border border-white/10 hover:bg-red-600 transition-all"
          >
            Next →
          </button>
        </div>
      )}

      <div className="flex gap-2 mt-6">
        <StatBadge icon="🔥" label="Popularity" value={movieData.popularity} />
        <StatBadge icon="⭐" label="Rating" value={movieData.vote_average} />
        <StatBadge
          icon="🗳️"
          label="Votes"
          value={movieData.vote_count?.toLocaleString()}
        />
      </div>

      <p className="text-gray-300 text-sm leading-relaxed mt-6 pb-8">
        {movieData.overview}
      </p>
    </div>
  );
};

export default MovieDetails;
