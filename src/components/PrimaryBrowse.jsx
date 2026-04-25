import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle.jsx";

const PrimaryBrowse = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const { original_title, overview, id } = movies[0];

  return (
    <div className="relative w-full h-auto md:h-full bg-black overflow-hidden">
      <VideoBackground movieId={id} />
      <VideoTitle
        original_title={original_title}
        overview={overview}
        movieId={id}
        movieData={movies[1]}
      />
    </div>
  );
};

export default PrimaryBrowse;
