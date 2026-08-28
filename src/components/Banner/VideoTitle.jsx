import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMovieCardData } from "../../assets/movieSlice";
import MoreInfoVideo from "./MoreInfoVideo";

const VideoTitle = ({ original_title, overview, movieId, movieData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handlePlayBtn() {
    if (!movieId) return null;
    dispatch(addMovieCardData(movieData));
    navigate(`/movie/${movieId}`);
  }

  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-r from-black/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-24 z-40 px-6 text-white sm:bottom-28 sm:left-10 sm:px-6 lg:left-16 lg:max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-300/90">
          Featured tonight
        </p>
        <h1 className="mb-3 max-w-xl text-4xl font-black leading-[0.95] tracking-tight drop-shadow-2xl sm:text-5xl lg:text-7xl">
          {original_title}
        </h1>

        <p className="mb-6 hidden max-w-xl text-sm leading-6 text-zinc-200 drop-shadow sm:line-clamp-3 sm:block lg:text-base">
          {overview}
        </p>

        <div className="relative flex items-center gap-3">
          <button
            onClick={handlePlayBtn}
            className="flex cursor-pointer items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-bold text-black shadow-xl shadow-black/30 transition hover:bg-amber-300 sm:px-6 sm:text-base"
          >
            ▶ Play
          </button>
          <div className="relative group">
            <button className="cursor-pointer flex items-center gap-2 bg-white/20 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-md font-semibold text-sm md:text-lg hover:bg-white/30 backdrop-blur-sm transition border border-white/20 shadow-lg">
              ⓘ More Info
            </button>
            <div className="absolute top-full left-0 mt-3 hidden group-hover:block z-50 w-48 sm:w-56 animate-fade-in shadow-2xl">
              <MoreInfoVideo movieDetails={movieData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
