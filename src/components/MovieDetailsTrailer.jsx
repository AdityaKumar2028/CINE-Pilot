const MovieDetailsTrailer = ({ trailerKey }) => {
  if (!trailerKey) return null;

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-video overflow-hidden rounded-xl shadow-lg">
      <iframe
        className="absolute inset-0 w-full h-full pointer-events-none"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
      />
    </div>
  );
};

export default MovieDetailsTrailer;
