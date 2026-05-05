import { backgroundURL } from "../../assets/Constants";
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

      <div className="relative z-10 flex flex-col items-center pt-20 sm:pt-28 md:pt-40 px-4 sm:px-6 min-h-screen w-full">
        <p className="text-gray-300 text-[10px] sm:text-xs mb-4 sm:mb-5 tracking-widest uppercase text-center">
          Ask anything about movies
        </p>

        <div className="w-full flex flex-col items-center">
          <AskPilotSearch />
          <AskPilotMovieSuggestions />
        </div>

        <p className="text-gray-400 text-[10px] sm:text-xs mt-4 tracking-wide">
          Powered by CINEPilot AI
        </p>
      </div>
    </div>
  );
};

export default AskPilot;
