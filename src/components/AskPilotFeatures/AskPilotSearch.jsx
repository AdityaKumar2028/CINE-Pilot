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
    <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-zinc-900 p-[2px] sm:p-[3px]">
      <div className="absolute top-1/2 left-1/2 w-[250%] aspect-square -translate-x-1/2 -translate-y-1/4 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_25%,#FF0000_75%,transparent_100%)]" />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 flex min-h-13 w-full items-center gap-2 rounded-[13px] bg-[#0a0a0a] px-3 py-3 sm:px-5 sm:py-4"
      >
        <input
          ref={inputRef}
          className="flex-1 bg-transparent text-white text-sm sm:text-base placeholder-gray-500 outline-none min-w-0"
          placeholder="Which movies do you want to watch today?"
        />
        <button
          type="submit"
          className="shrink-0 rounded p-1 text-gray-400 transition-colors hover:text-[#FF0000] focus-visible:outline-2 focus-visible:outline-red-500"
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
