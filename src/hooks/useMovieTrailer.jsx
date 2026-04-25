import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../assets/Constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../assets/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (movieId) {
      getMovieVideos();
    }
  }, [movieId]);

  const getMovieVideos = async () => {
    const result = await fetch(
      `/api/tmdb?path=movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );
    const json = await result.json();
    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    console.log(filterData);
    const trailerVideo = filterData.length ? filterData[0] : json.results[0];

    console.log(trailerVideo);

    dispatch(addTrailerVideo(trailerVideo));
  };
};

export default useMovieTrailer;
