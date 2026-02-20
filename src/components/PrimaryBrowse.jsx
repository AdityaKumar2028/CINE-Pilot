import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./videoTitle";

const PrimaryBrowse = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return null;
  const { original_title, overview, id } = movies[1];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <VideoBackground movieId={id} />
      <VideoTitle original_title={original_title} overview={overview} />
    </div>
  );
};

export default PrimaryBrowse;
