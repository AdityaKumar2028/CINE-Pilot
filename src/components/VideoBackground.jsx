import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store?.movies?.trailerVideo);

  if (!trailer) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <iframe
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "max(100vw, 177.78vh)",
          height: "max(56.25vw, 100vh)",
        }}
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer.key}&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
      />
    </div>
  );
};

export default VideoBackground;
