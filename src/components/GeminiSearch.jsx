import fetchMovieSearch from "./fetchMovieSearch";
// import ai from "../assets/gemini";
import { addPilotMovies } from "../assets/askPilotSlice";
const GeminiSearch = async (query, dispatch) => {
  const geminiQuery =
    "Act as a movie recommendation system and suggest some movies for the query " +
    query +
    "names of famous movies. Give comma separated names. sample result: The Black Phone 2, Wolf Man, Final Destination: Bloodlines, Scream 7, Superman, 3 Idiots, PK. If the query ask for particular movie and gives description of it just provide the respective name of movie which match to the given description and provide 2-3 movie names only for this case.";

  const response = await fetch("/api/gemini", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: geminiQuery }),
  });
  // const response = await ai.models.generateContent({
  //   model: "gemini-2.5-flash",
  //   contents: geminiQuery,
  // });
  // const text = response.candidates[0].content.parts[0].text;
  const text = await response.json();
  console.log(text);

  // const movieList = text.split(", ");

  // const resultResponse = await Promise.all(movieList.map(fetchMovieSearch));

  // dispatch(
  //   addPilotMovies({
  //     movieNames: movieList,
  //     movieResult: resultResponse,
  //   }),
  // );
};

export default GeminiSearch;
