import { API_OPTIONS } from "../assets/Constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../assets/movieSlice";
import { useEffect } from "react";

export const useUpcomingMovies = () => {
  useEffect(() => {
    fetchUpcomingMovies();
  }, []);

  const dispatch = useDispatch();
  const fetchUpcomingMovies = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
};
