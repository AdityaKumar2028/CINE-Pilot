import { backgroundURL } from "../assets/Constants";
import AskPilotSearch from "./AskPilotSearch";

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

        <div className="relative overflow-hidden p-[3px] rounded-2xl w-full max-w-2xl bg-zinc-900">
          <div className="absolute top-1/2 left-1/2 w-[250%] aspect-square -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_25%,#FF0000_75%,transparent_100%)]" />

          <AskPilotSearch />
          <AskPilotMovieSuggestions />
        </div>

        <p className="text-gray-400 text-xs mt-4 tracking-wide">
          Powered by CINEPilot AI
        </p>
      </div>
    </div>
  );
};

export default AskPilot;
