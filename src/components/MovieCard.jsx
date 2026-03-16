import { TMDB_CDN_URL } from "../assets/Constants";

const MovieCard = ({ movieData }) => {
  if (!movieData.poster_path) return null;

  return (
    <div className="w-36 md:w-44 lg:w-48 shrink-0">
      <img
        className="w-full h-auto rounded-md object-cover"
        alt="movie card"
        src={TMDB_CDN_URL + movieData.poster_path}
      />
    </div>
  );
};

export default MovieCard;
