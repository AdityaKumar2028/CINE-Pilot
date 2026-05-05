import { findLanguage, TMDB_CDN_URL } from "../../assets/Constants";

const MoreInfoVideo = ({ movieDetails }) => {
  if (!movieDetails) return null;

  const { backdrop_path, original_language, release_date, poster_path } =
    movieDetails;
  const language = findLanguage(original_language) || original_language;

  return (
    <div className="flex flex-col gap-3 p-3 bg-black/80 backdrop-blur-md border border-gray-600 rounded-xl overflow-hidden">
      {(backdrop_path || poster_path) && (
        <img
          src={TMDB_CDN_URL + (backdrop_path ? backdrop_path : poster_path)}
          alt="Movie Poster"
          className="w-full h-auto object-cover rounded-lg shadow-md"
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
