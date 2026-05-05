import Header from "../Layout/Header.jsx";
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
    <div className="bg-black min-h-screen">
      <Header />
      <div className="">
        <>
          <PrimaryBrowse />
          <SecondaryBrowse />
        </>
      </div>
      <Footer />
    </div>
  );
};

export default Browse;
