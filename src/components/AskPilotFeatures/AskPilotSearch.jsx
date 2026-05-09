import { useRef } from "react";
import GeminiSearch from "./GeminiSearch";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../../assets/askPilotSlice";

const AskPilotSearch = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    dispatch(setIsLoading(true));
    e.preventDefault();
    const query = inputRef.current?.value || "";
    if (!query.trim()) return;
    await GeminiSearch(query, dispatch);
    inputRef.current.value = "";
  };

  return (
    <div className="relative overflow-hidden p-[2px] sm:p-[3px] rounded-2xl w-full max-w-xs sm:max-w-lg md:max-w-2xl bg-zinc-900">
      <div className="absolute top-1/2 left-1/2 w-[250%] aspect-square -translate-x-1/2 -translate-y-1/4 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_25%,#FF0000_75%,transparent_100%)]" />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 flex items-center bg-[#0a0a0a] rounded-[13px] px-3 sm:px-5 py-3 sm:py-4 w-full gap-2"
      >
        <input
          ref={inputRef}
          className="flex-1 bg-transparent text-white text-sm sm:text-base placeholder-gray-500 outline-none min-w-0"
          placeholder="Which movies do you want to watch today?"
        />
        <button
          type="submit"
          className="text-gray-400 hover:text-[#FF0000] transition-colors shrink-0"
          aria-label="Search"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default AskPilotSearch;
