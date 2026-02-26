import { useRef } from "react";
import GeminiSearch from "./GeminiSearch";
import { useDispatch } from "react-redux";

const AskPilotSearch = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const query = inputRef.current?.value || "";

    if (!query.trim()) return;

    await GeminiSearch(query, dispatch);

    inputRef.current.value = "";
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-10 flex bg-[#0a0a0a] rounded-[13px] px-5 py-4 w-full"
    >
      <input
        ref={inputRef}
        className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
        placeholder="Which movies do you want to watch today?"
      />
      <button
        type="submit"
        className="text-gray-400 hover:text-[#FF0000] transition-colors ml-3"
      >
        <svg
          className="w-6 h-6"
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
  );
};

export default AskPilotSearch;
