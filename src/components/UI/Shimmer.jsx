import React from "react";

const Shimmer = () => {
  return (
    <div className="w-full mt-6 px-6 py-8 bg-black text-white">
      <div className="h-8 w-72 rounded-md bg-zinc-800 animate-pulse mb-6"></div>

      <div className="flex gap-5 overflow-x-hidden">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="min-w-[170px] h-[260px] rounded-xl overflow-hidden 
                       bg-zinc-900 border border-zinc-800 shadow-lg"
          >
            <div
              className="w-full h-full bg-gradient-to-br 
                         from-zinc-800 via-zinc-900 to-zinc-800 
                         animate-pulse relative"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r 
                           from-transparent via-white/5 to-transparent 
                           animate-pulse"
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="h-8 w-96 rounded-md bg-zinc-800 animate-pulse mt-12 mb-6"></div>

      <div className="flex gap-5 overflow-x-hidden">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="min-w-[170px] h-[260px] rounded-xl overflow-hidden 
                       bg-zinc-900 border border-zinc-800 shadow-lg"
          >
            <div
              className="w-full h-full bg-gradient-to-br 
                         from-zinc-800 via-zinc-900 to-zinc-800 
                         animate-pulse relative"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r 
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
