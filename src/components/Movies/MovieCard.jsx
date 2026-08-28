import { TMDB_CDN_URL } from "../../assets/Constants";

const MovieCard = ({ movieData }) => {
  if (!movieData?.poster_path) return null;

  return (
    <div className="group w-24 shrink-0 sm:w-32 md:w-36 lg:w-44">
      <img
        className="aspect-[2/3] w-full rounded-md object-cover transition-transform duration-200 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-black/60"
        alt={movieData.title || "movie poster"}
        src={TMDB_CDN_URL + movieData.poster_path}
        loading="lazy"
      />
    </div>
  );
};

export default MovieCard;
