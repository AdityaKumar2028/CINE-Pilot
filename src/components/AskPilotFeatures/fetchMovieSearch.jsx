const fetchMovieSearch = async (movieName) => {
  const res = await fetch(
    `/api/tmdb?path=search/movie?query=${encodeURIComponent(movieName)}&include_adult=false&language=en-US&page=1`,
  );

  const json = await res.json();
  return json.results || [];
};

export default fetchMovieSearch;
