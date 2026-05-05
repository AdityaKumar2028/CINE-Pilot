import useMovieTrailer from "../../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store?.movies?.trailerVideo);

  if (!trailer) return null;

  return (
    <div className="relative w-screen aspect-video overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full scale-150"
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${trailer.key}&rel=0&iv_load_policy=3&disablekb=1&fs=0`}
        title="Trailer"
        allow="autoplay"
      />
      <div className="absolute inset-0 z-10 bg-transparent" />
    </div>
  );
};

export default VideoBackground;
