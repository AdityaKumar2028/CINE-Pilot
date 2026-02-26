import { backgroundURL } from "../assets/Constants";
import AskPilotSearch from "./AskPilotSearch";
import AskPilotMovieSuggestions from "./AskPilotMovieSuggestions";

const AskPilot = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <img
        src={backgroundURL}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3]"
      />

      <div className="relative z-10 flex flex-col items-center pt-40 px-4 min-h-screen">
        <p className="text-gray-300 text-xs mb-5 tracking-widest uppercase">
          Ask anything about movies
        </p>
        <>
          <AskPilotSearch />
          <AskPilotMovieSuggestions />
        </>

        <p className="text-gray-400 text-xs mt-4 tracking-wide">
          Powered by CINEPilot AI
        </p>
      </div>
    </div>
  );
};

export default AskPilot;
