import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store?.movies?.trailerVideo);

  if (!trailer) return null;

  return (
    <div className="relative w-screen aspect-video overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full pointer-events-none scale-150"
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer.key}&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1`}
        title="YouTube video player"
        allow="autoplay; encrypted-media"
      />
    </div>
  );
};

export default VideoBackground;
