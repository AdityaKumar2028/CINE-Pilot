import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMovieCardData } from "../../assets/movieSlice";
import MoreInfoVideo from "./MoreInfoVideo";
import { useState } from "react";

const VideoTitle = ({ original_title, overview, movieId, movieData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  function handlePlayBtn() {
    if (!movieId) return null;
    dispatch(addMovieCardData(movieData));
    navigate(`/movie/${movieId}`);
  }

  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-r from-black/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-16 z-40 px-4 text-white sm:bottom-28 sm:left-10 sm:px-6 lg:left-16 lg:max-w-2xl">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-300/90 sm:mb-3 sm:text-xs sm:tracking-[0.28em]">
          Featured tonight
        </p>
        <h1 className="mb-3 max-w-xl text-3xl font-black leading-[0.95] tracking-tight drop-shadow-2xl sm:text-5xl lg:text-7xl">
          {original_title}
        </h1>

        <p className="mb-6 hidden max-w-xl text-sm leading-6 text-zinc-200 drop-shadow sm:line-clamp-3 sm:block lg:text-base">
          {overview}
        </p>

        <div className="relative flex flex-wrap items-center gap-2.5 sm:gap-3">
          <button
            onClick={handlePlayBtn}
            className="flex min-h-11 cursor-pointer items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-bold text-black shadow-xl shadow-black/30 transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-6 sm:text-base"
          >
            ▶ Play
          </button>
          <div className="relative group">
            <button
              type="button"
              onClick={() => setIsInfoOpen((open) => !open)}
              aria-expanded={isInfoOpen}
              className="flex min-h-11 cursor-pointer items-center gap-2 rounded-md border border-white/20 bg-white/20 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:px-6 md:py-2.5 md:text-lg"
            >
              ⓘ More Info
            </button>
            <div className={`${isInfoOpen ? "block" : "hidden"} absolute left-0 top-full z-50 mt-3 w-[min(18rem,calc(100vw-2rem))] animate-fade-in shadow-2xl sm:w-56 group-hover:block`}>
              <MoreInfoVideo movieDetails={movieData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
