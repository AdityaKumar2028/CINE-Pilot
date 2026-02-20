import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store?.movies?.trailerVideo);
  if (!trailer) return null;

  {
    console.log(trailer.key);
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <iframe
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[2.5%]"
        style={{
          width: "calc(max(100vw, 177.78vh))",
          height: "calc(max(56.25vw, 100vh))",
          border: "none",
          pointerEvents: "none",
        }}
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer.key}&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&disablekb=1&vq=hd1080`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
};

export default VideoBackground;
