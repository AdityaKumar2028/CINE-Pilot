import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../assets/Constants";
import { useEffect } from "react";
import { addMovieDetailTrailer } from "../assets/movieSlice";

export const useMovieDetails = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (movieId) {
      getMovieTrailer();
    }
  }, [movieId]);

  const getMovieTrailer = async () => {
    const result = await fetch(
      `/api/tmdb?path=movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );
    const json = await result.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailerVideo = filterData.length ? filterData[0] : json.results[0];
    dispatch(addMovieDetailTrailer(trailerVideo));
  };
};
