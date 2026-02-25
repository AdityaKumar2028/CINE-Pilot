import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const { prompt } = req.body;

    const result = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: prompt,
    });

    res.status(200).json({
      text: result.text,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
