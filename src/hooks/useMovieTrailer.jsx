import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
      `https://corsproxy.io/?https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );
    const json = await result.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailerVideo = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailerVideo));
  };
};

export default useMovieTrailer;
