const apiKey = import.meta.env.VITE_TMDB_TOKEN;
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization: "Bearer " + apiKey,
//   },
// };
const fetchMovieSearch = async (movieName) => {
  // const res = await fetch(
  //   `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
  //   options,
  // );

  const res = await fetch(
    `/api/tmdb?path=search/movie?query=${encodeURIComponent(movieName)}&include_adult=false&language=en-US&page=1`,
  );

  const json = await res.json();
  return json.results || [];
};

export default fetchMovieSearch;
