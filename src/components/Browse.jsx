import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies.jsx";
import PrimaryBrowse from "./PrimaryBrowse.jsx";
import SecondaryBrowse from "./SecondaryBrowse.jsx";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <div className="pt-12">
        <PrimaryBrowse />
        <SecondaryBrowse />
      </div>
    </div>
  );
};

export default Browse;
