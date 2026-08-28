import { useState } from "react";

const MovieDetailsTrailer = ({ trailerKey, trailerDetails }) => {
  const [muted, setMuted] = useState(true);

  if (!trailerKey) return null;

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl shadow-red-900/10">
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-8 h-8 border-4 border-red-500/30 border-t-red-500 rounded-full animate-spin" />
      </div>

      <iframe
        key={muted}
        className="absolute inset-0 w-full h-full scale-110 pointer-events-none"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=${
          muted ? 1 : 0
        }&controls=0&showinfo=0&modestbranding=1&loop=1&playlist=${trailerKey}&rel=0&iv_load_policy=3&disablekb=1&fs=0&playsinline=1`}
        title={trailerDetails?.name || "Trailer"}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen={false}
      />

      <div className="absolute inset-0 z-10 bg-transparent" />
      <button
        onClick={() => setMuted((prev) => !prev)}
        className="absolute bottom-3 right-3 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:border-red-600 hover:bg-red-600 sm:bottom-5 sm:right-5 sm:px-5 sm:py-2.5 sm:text-sm"
      >
        {muted ? "🔇 Unmute" : "🔊 Mute"}
      </button>
    </div>
  );
};

export default MovieDetailsTrailer;
