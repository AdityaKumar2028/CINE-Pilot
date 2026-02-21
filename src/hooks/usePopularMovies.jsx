import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../assets/Constants";
import { addPopularMovies } from "../assets/movieSlice";

export const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchPopularMovies();
  }, []);
  const fetchPopularMovies = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
};
