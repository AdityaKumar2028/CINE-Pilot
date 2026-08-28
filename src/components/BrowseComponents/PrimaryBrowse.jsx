import { useSelector } from "react-redux";
import VideoBackground from "../Banner/VideoBackground.jsx";
import VideoTitle from "../Banner/VideoTitle.jsx";
import Shimmer from "../UI/Shimmer";

const PrimaryBrowse = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return <Shimmer />;
  const featuredMovie = movies[0];
  if (!featuredMovie) return <Shimmer />;
  const { original_title, overview, id } = featuredMovie;

  return (
    <section className="relative isolate min-h-[32rem] w-full overflow-hidden bg-zinc-950 sm:min-h-[38rem] lg:min-h-[42rem]">
      <VideoBackground movieId={id} />
      <VideoTitle
        original_title={original_title}
        overview={overview}
        movieId={id}
        movieData={featuredMovie}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-black via-black/70 to-transparent" />
    </section>
  );
};

export default PrimaryBrowse;
