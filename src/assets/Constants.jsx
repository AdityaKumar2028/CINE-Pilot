export const backgroundURL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_large.jpg";

export const logoUrl =
  "https://imgs.search.brave.com/-Uafpr_hTOOx1xbdvv50k-mQ7nX73QxvkNz2yUZXtVQ/...";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};
const languageMap = {
  en: "English",
  hi: "Hindi",
  fr: "French",
  es: "Spanish",
  de: "German",
  ja: "Japanese",
  ko: "Korean",
  zh: "Chinese",
  it: "Italian",
  ru: "Russian",
  pt: "Portuguese",
  ar: "Arabic",
};
export function findLanguage(original_language) {
  return languageMap[original_language] || "Unknown";
}

export const links = [
  { name: "LinkedIn", href: "https://linkedin.com/in/" },
  { name: "GitHub", href: "https://github.com/AdityaKumar2028" },
  {
    name: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=adityakumar2k28@gmail.com",
  },
  { name: "Live Demo", href: "https://cine-pilot.vercel.app/browse" },
];

export const meta = [
  "📍 Rohini, Delhi",
  "💻 React · Redux · Firebase",
  "⏳ Open to Interns '26",
  "⭐ 9.5 CGPA · CSE 2nd Year",
];

export const footerKeywords = {
  appName: "CINE PILOT",
  appFeature: "AI Ask Pilot Integration",
  appDescription:
    "Your intelligent cinematic compass. Discover trending titles and get personalized recommendations powered by Gemini AI.",

  myDescription: "Aspiring Developer",
  myName: "Aditya Kumar",
  mySkills: ["React", "Redux", "Firebase", "Tailwind CSS", "Gemini API"],
  year: "© 2026",
  finalContent: "All rights reserved.",
};

export const TMDB_CDN_URL = "https://images.tmdb.org/t/p/w500/";
