import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMovieCardData } from "../assets/movieSlice";
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10 pointer-events-none" />
      <div className="absolute z-40 top-[55%] md:top-1/4 left-6 sm:left-16 w-full max-w-lg text-white pr-6 sm:pr-0">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-4 drop-shadow-lg">
          {original_title}
        </h1>

        <p className="hidden sm:block md:text-base text-sm text-gray-200 mb-6 line-clamp-3 drop-shadow">
          {overview}
        </p>

        <div className="flex gap-3 items-center relative">
          <button
            onClick={handlePlayBtn}
            className="cursor-pointer flex items-center gap-2 bg-white text-black px-4 md:px-6 py-2 md:py-2.5 rounded-md font-bold text-sm md:text-lg hover:bg-white/80 transition shadow-lg"
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
