const VideoTitle = ({ original_title, overview }) => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
      <div className="absolute z-20 top-1/3 left-8 sm:left-16 w-full max-w-lg text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          {original_title}
        </h1>

        <p className="hidden sm:block text-base md:text-lg text-gray-200 mb-6 line-clamp-3 drop-shadow">
          {overview}
        </p>

        <div className="flex gap-3">
          <button className="cursor-pointer flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-md font-semibold text-lg hover:bg-white/80 transition shadow-lg">
            ▶ Play
          </button>

          <button className="cursor-pointer flex items-center gap-2 bg-white/20 text-white px-6 py-2.5 rounded-md font-semibold text-lg hover:bg-white/30 backdrop-blur-sm transition border border-white/20 shadow-lg">
            ⓘ More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
