import { findLanguage, TMDB_CDN_URL } from "../../assets/Constants";

const MoreInfoVideo = ({ movieDetails }) => {
  if (!movieDetails) return null;

  const { backdrop_path, original_language, release_date, poster_path } =
    movieDetails;
  const language = findLanguage(original_language) || original_language;

  return (
    <div className="flex flex-col gap-3 overflow-hidden rounded-xl border border-gray-600 bg-black/90 p-3 backdrop-blur-md">
      {(backdrop_path || poster_path) && (
        <img
          src={TMDB_CDN_URL + (backdrop_path ? backdrop_path : poster_path)}
          alt="Movie Poster"
          className="max-h-44 w-full rounded-lg object-cover shadow-md sm:max-h-none"
        />
      )}

      <div className="flex flex-col gap-1.5 text-xs sm:text-sm text-gray-200 px-1">
        <div className="flex justify-between items-center border-b border-gray-600 pb-1.5">
          <span className="font-semibold text-gray-400">Release</span>
          <span>{release_date}</span>
        </div>

        <div className="flex justify-between items-center pt-0.5">
          <span className="font-semibold text-gray-400">Language</span>
          <span className="capitalize">{language}</span>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoVideo;
