import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { useSelector } from "react-redux";

const MovieDetails = () => {
  const { id } = useParams();
  useMovieDetails(id);
  const trailer = useSelector((store) => store.movies.movieDetailTrailer);
  console.log(trailer);
  return (
    <div className="movie-details">
      <h1>Hello! coming soon!</h1>
    </div>
  );
};

export default MovieDetails;
