const AskPilotButton = ({ props }) => {
  return (
    <button
      onClick={props}
      className="group relative inline-flex shrink-0 cursor-pointer overflow-hidden rounded-[10px] p-[2px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,#ff0080,#ff4500,#ffd700,#00ff88,#00cfff,#a855f7,#ff0080)] animate-[spin_2.5s_linear_infinite] group-hover:animate-[spin_1.2s_linear_infinite] group-hover:brightness-125 transition-all" />

      <div className="relative z-10 flex items-center gap-[5px] rounded-[8px] bg-[#0a0a0f] px-2.5 py-2 transition-colors duration-200 group-hover:bg-[#12121a] sm:gap-[7px] sm:px-[18px]">
        <svg
          className="w-[12px] h-[12px] sm:w-[15px] sm:h-[15px] opacity-90 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z"
            fill="white"
            opacity="0.9"
          />
          <path
            d="M19 16L19.9 18.1L22 19L19.9 19.9L19 22L18.1 19.9L16 19L18.1 18.1L19 16Z"
            fill="white"
            opacity="0.6"
          />
        </svg>

        <span className="text-white text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">
          Ask Pilot
        </span>
      </div>
    </button>
  );
};

export default AskPilotButton;
