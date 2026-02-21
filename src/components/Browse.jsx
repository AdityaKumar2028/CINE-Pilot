import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies.jsx";
import PrimaryBrowse from "./PrimaryBrowse.jsx";
import SecondaryBrowse from "./SecondaryBrowse.jsx";
import { usePopularMovies } from "../hooks/usePopularMovies.jsx";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies.jsx";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies.jsx";
import AskPilot from "./AskPilot.jsx";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const askPilotSearchState = useSelector(
    (store) => store?.askPilot?.askPilotState,
  );
  console.log(askPilotSearchState);

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <div className="">
        {askPilotSearchState ? (
          <AskPilot />
        ) : (
          <>
            <PrimaryBrowse />
            <SecondaryBrowse />
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;
