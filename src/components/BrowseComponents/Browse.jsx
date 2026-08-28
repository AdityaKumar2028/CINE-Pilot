import { useNowPlayingMovies } from "../../hooks/useNowPlayingMovies.jsx";
import PrimaryBrowse from "./PrimaryBrowse.jsx";
import SecondaryBrowse from "./SecondaryBrowse.jsx";
import { usePopularMovies } from "../../hooks/usePopularMovies.jsx";
import { useTopRatedMovies } from "../../hooks/useTopRatedMovies.jsx";
import { useUpcomingMovies } from "../../hooks/useUpcomingMovies.jsx";
import Footer from "../Layout/Footer.jsx";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      <PrimaryBrowse />
      <SecondaryBrowse />
      <Footer />
    </div>
  );
};

export default Browse;
