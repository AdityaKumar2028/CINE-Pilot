import React from "react";
import { links, meta, footerKeywords } from "../../assets/Constants";
import SocialLink from "../UI/SocialLink";

const Footer = () => {
  const {
    appName,
    appFeature,
    appDescription,
    myDescription,
    myName,
    year,
    finalContent,
    mySkills = [],
  } = footerKeywords || {};

  return (
    <footer className="w-full bg-[#141414] text-white border-t border-[#E50914]/20">
      <div className="max-w-[1400px] w-full mx-auto px-6 py-8 md:py-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 border-b border-white/10 pb-8">
          <div className="w-full lg:max-w-[35%]">
            <h2
              className="text-4xl tracking-wide mb-3"
              style={{ fontFamily: "'Bebas Neue', cursive" }}
            >
              {appName?.split(" ")[0]}
              <span className="text-[#E50914]"> {appName?.split(" ")[1]}</span>
            </h2>

            <p className="text-sm text-gray-400 mb-4 leading-relaxed max-w-sm">
              {appDescription}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-[#E50914]/30 bg-black/50 text-xs">
              <span className="text-[#E50914] font-bold">● Live</span>
              {appFeature}
            </div>
          </div>

          <div className="w-full lg:w-auto flex-1">
            <h3 className="text-xl font-bold mb-1">{myName}</h3>

            <p className="text-[#E50914] text-xs mb-4 font-medium tracking-wide uppercase">
              {myDescription}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 text-sm text-gray-400">
              {meta.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[35%]">
            <p className="text-xs tracking-widest text-gray-500 uppercase mb-3 font-semibold">
              Connect
            </p>

            <div className="grid grid-cols-2 gap-3">
              {links.map((link) => (
                <SocialLink key={link.name} {...link} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6 text-xs text-gray-500">
          <p>
            {year} <span className="text-white font-medium">{myName}</span>{" "}
            {finalContent}
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {mySkills.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-black/50 border border-white/10 rounded text-[10px] uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
