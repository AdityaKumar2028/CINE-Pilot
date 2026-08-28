import React from "react";

const Shimmer = () => {
  return (
    <div className="w-full overflow-hidden bg-black px-4 py-8 text-white sm:px-6">
      <div className="mb-6 h-8 w-48 animate-pulse rounded-md bg-zinc-800 sm:w-72"></div>

      <div className="flex gap-2 overflow-x-hidden sm:gap-3 md:gap-4">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="h-[13.5rem] w-24 shrink-0 overflow-hidden rounded-md border border-zinc-800 bg-zinc-900 shadow-lg sm:h-[18rem] sm:w-32 md:h-[22rem] md:w-36 lg:h-[27rem] lg:w-44"
          >
            <div
              className="relative h-full w-full bg-linear-to-br 
                         from-zinc-800 via-zinc-900 to-zinc-800 
                         animate-pulse relative"
            >
              <div
                className="absolute inset-0 bg-linear-to-r 
                           from-transparent via-white/5 to-transparent 
                           animate-pulse"
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-6 mt-12 h-8 w-56 animate-pulse rounded-md bg-zinc-800 sm:w-96"></div>

      <div className="flex gap-2 overflow-x-hidden sm:gap-3 md:gap-4">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="h-[13.5rem] w-24 shrink-0 overflow-hidden rounded-md border border-zinc-800 bg-zinc-900 shadow-lg sm:h-[18rem] sm:w-32 md:h-[22rem] md:w-36 lg:h-[27rem] lg:w-44"
          >
            <div
              className="relative h-full w-full bg-linear-to-br 
                         from-zinc-800 via-zinc-900 to-zinc-800 
                         animate-pulse relative"
            >
              <div
                className="absolute inset-0 bg-linear-to-r 
                           from-transparent via-white/5 to-transparent 
                           animate-pulse"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
