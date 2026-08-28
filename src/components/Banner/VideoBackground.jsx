import useMovieTrailer from "../../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store?.movies?.trailerVideo);

  if (!trailer) return null;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-zinc-950">
      <iframe
        className="pointer-events-none absolute left-1/2 top-1/2 h-full min-h-full w-full min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 scale-[1.12] border-0 object-cover sm:scale-[1.08]"
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${trailer.key}&rel=0&iv_load_policy=3&disablekb=1&fs=0`}
        title="Trailer"
        allow="autoplay"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/45 to-black/5" />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-black/20" />
    </div>
  );
};

export default VideoBackground;
