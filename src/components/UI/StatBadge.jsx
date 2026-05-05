export const StatBadge = ({ label, value, icon }) => (
  <div className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl py-4 px-2 hover:border-red-500/50 hover:bg-white/10 transition-all duration-300 shadow-lg">
    <span className="text-xl sm:text-2xl mb-1">{icon}</span>
    <span className="text-white font-extrabold text-lg sm:text-xl tracking-tight">
      {typeof value === "number" ? value.toFixed(1) : value || "N/A"}
    </span>
    <span className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-widest mt-1 text-center font-medium">
      {label}
    </span>
  </div>
);
