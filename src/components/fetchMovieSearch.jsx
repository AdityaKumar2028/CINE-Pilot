import { API_OPTIONS } from "../assets/Constants";

const fetchMovieSearch = async (movieName) => {
  const res = await fetch(
    `/api/tmdb?path=search/movie?query=${movieName}&page=1`,
    API_OPTIONS,
  );

  const json = await res.json();
  return json.results || [];
};

export default fetchMovieSearch;
