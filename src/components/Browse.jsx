import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies.jsx";
import PrimaryBrowse from "./PrimaryBrowse.jsx";
import SecondaryBrowse from "./SecondaryBrowse.jsx";
import { usePopularMovies } from "../hooks/usePopularMovies.jsx";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies.jsx";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <div className="">
        <PrimaryBrowse />
        <SecondaryBrowse />
      </div>
    </div>
  );
};

export default Browse;
