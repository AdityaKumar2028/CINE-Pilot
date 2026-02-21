import { useEffect } from "react";
import { API_OPTIONS } from "../assets/Constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../assets/movieSlice";

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const fetchTopRatedMovies = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    fetchTopRatedMovies();
  }, []);
};
