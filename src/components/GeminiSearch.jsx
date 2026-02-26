import fetchMovieSearch from "./fetchMovieSearch";

const GeminiSearch = async (query, dispatch) => {
  const geminiQuery =
    "Act as a movie recommendation system and suggest some movies for the query " +
    query +
    " only 5 names of famous movies. Give comma separated names.";

  const response = await fetch("/api/gemini", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: geminiQuery }),
  });

  const data = await response.json();

  const text =
    "Materialists, Hamnet, The Drama, The History of Sound, On Swift Horses";

  const movieList = text.split(", ");

  const resultResponse = await Promise.all(movieList.map(fetchMovieSearch));

  dispatch(
    addPilotMovies({
      movieNames: movieList,
      movieResult: resultResponse,
    }),
  );
};

export default GeminiSearch;
