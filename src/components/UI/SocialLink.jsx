const SocialLink = ({ name, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex justify-between items-center px-4 py-2.5 rounded-md border border-[#E50914]/20 
               bg-black/40 text-gray-400 hover:text-white hover:border-[#E50914] 
               hover:bg-[#E50914]/10 transition-all group w-full text-sm"
  >
    <span className="font-medium">{name}</span>
    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#E50914]">
      →
    </span>
  </a>
);

export default SocialLink;
