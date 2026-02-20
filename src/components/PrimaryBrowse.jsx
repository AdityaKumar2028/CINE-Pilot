import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";

const PrimaryBrowse = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return null;
  console.log(movies);
  const { original_title, overview, id } = movies[1];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 p-2 sm:p-3">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <VideoBackground movieId={id} />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

      <div className=" w-1/3 absolute top-3/7 -translate-y-1/4 left-10 sm:left-16 max-w-sm sm:max-w-md md:max-w-xl text-white">
        <h1 className="text-5xl sm:text-5xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          {original_title}
        </h1>
        <p className="hidden sm:block text-sm sm:text-base md:text-[1.02rem] text-gray-200 mb-6 line-clamp-3 leading-relaxed drop-shadow">
          {overview}
        </p>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-md font-semibold text-base hover:bg-white/85 transition-all duration-200 shadow-lg">
            <span className="text-[1.1em]">▶ Play</span>
          </button>
          <button className="flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-md font-bold text-base hover:bg-white/30 backdrop-blur-sm transition-all duration-200 shadow-lg border border-white/20">
            <span className="text-[1.1em] p-0 m-0">ⓘ More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrimaryBrowse;
