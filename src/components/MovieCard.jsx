import { TMDB_CDN_URL } from "../assets/Constants";

const MovieCard = ({ movieData }) => {
  return (
    <div className="movie-card-container shrink-0">
      <img
        className="w-[12em]"
        alt="movie card"
        src={TMDB_CDN_URL + movieData.poster_path}
      />
    </div>
  );
};

export default MovieCard;
