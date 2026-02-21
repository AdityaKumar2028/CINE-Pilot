import React, { useRef } from "react";
import { backgroundURL } from "../assets/Constants";

const AskPilot = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = inputRef.current?.value || "";
    if (query.trim()) {
      console.log("Searching for:", query.trim());
      inputRef.current.value = "";
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <img
        src={backgroundURL}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3]"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-40 px-4 min-h-screen">
        <p className="text-gray-300 text-xs mb-5 tracking-widest uppercase">
          Ask anything about movies
        </p>

        <div className="relative overflow-hidden p-[3px] rounded-2xl w-full max-w-2xl bg-zinc-900">
          <div className="absolute top-1/2 left-1/2 w-[250%] aspect-square -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_25%,#FF0000_75%,transparent_100%)]" />

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
        </div>

        <p className="text-gray-400 text-xs mt-4 tracking-wide">
          Powered by CINEPilot AI
        </p>
      </div>
    </div>
  );
};

export default AskPilot;
