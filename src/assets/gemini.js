import { GoogleGenAI } from "@google/genai";
const genAiKey = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: genAiKey });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "How does AI work?",
  });
  console.log(response.text);
}

await main();
