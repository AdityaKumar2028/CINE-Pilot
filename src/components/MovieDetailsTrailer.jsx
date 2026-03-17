import { useState } from "react";

const MovieDetailsTrailer = ({ trailerKey, trailerDetails }) => {
  const [muted, setMuted] = useState(true);
  if (!trailerKey) return null;

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10">
      <iframe
        className="absolute inset-0 w-full h-full pointer-events-none"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=${muted ? 1 : 0}&controls=0&loop=1&playlist=${trailerKey}&rel=0`}
        title={trailerDetails?.name || "Trailer"}
        allow="autoplay; encrypted-media"
      />
      <button
        onClick={() => setMuted((p) => !p)}
        className="absolute bottom-3 right-3 z-10 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full border border-white/20 hover:bg-red-600/20 transition-all"
      >
        {muted ? "🔇 Unmute" : "🔊 Mute"}
      </button>
    </div>
  );
};

export default MovieDetailsTrailer;
