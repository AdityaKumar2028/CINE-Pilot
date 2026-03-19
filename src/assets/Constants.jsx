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

export const TMDB_CDN_URL = "https://images.tmdb.org/t/p/w500/";
