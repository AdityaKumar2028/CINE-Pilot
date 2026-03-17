import { useState } from "react";

const MovieDetailsTrailer = ({ trailerKey, trailerDetai }) => {
  const [muted, setMuted] = useState(true);

  if (!trailerKey) return null;

  return (
    <div
      className="relative w-full mx-auto aspect-video overflow-hidden rounded-xl shadow-lg
                    max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl"
    >
      <div className="movie-name">
        <h1>Movie Name is here</h1>
      </div>
      <iframe
        className="absolute inset-0 w-full h-full pointer-events-none"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=${muted ? 1 : 0}&controls=0&loop=1&playlist=${trailerKey}&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
      />
      <button
        className="absolute bottom-4 right-4 z-10 bg-black/60 text-white px-3 py-1 rounded-full text-sm"
        onClick={() => setMuted((prev) => !prev)}
      >
        {muted ? "🔇 Unmute" : "🔊 Mute"}
      </button>
    </div>
  );
};

export default MovieDetailsTrailer;
