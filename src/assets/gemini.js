import { GoogleGenAI } from "@google/genai";
const genAiKey = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: genAiKey });

export default ai;
