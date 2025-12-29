
import { GoogleGenAI, Type } from "@google/genai";
import { Ingredient, Status } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const fetchIngredientWithAI = async (query: string): Promise<Ingredient | null> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Provide a detailed ingredient analysis for: ${query}. Return JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            name: { type: Type.STRING },
            vegetarian: { type: Type.STRING, description: 'Yes, No, or Depends' },
            vegan: { type: Type.STRING, description: 'Yes, No, or Depends' },
            halal: { type: Type.STRING, description: 'Yes, No, or Depends' },
            description: { type: Type.STRING },
            whyAvoid: { type: Type.STRING },
            whereFound: { type: Type.ARRAY, items: { type: Type.STRING } },
            alternatives: { type: Type.ARRAY, items: { type: Type.STRING } },
            similarIngredients: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["id", "name", "vegetarian", "vegan", "halal", "description", "whyAvoid", "whereFound", "alternatives"]
        }
      }
    });

    const data = JSON.parse(response.text);
    return {
      ...data,
      id: data.id.toLowerCase().replace(/\s+/g, '-'),
      vegetarian: data.vegetarian as Status,
      vegan: data.vegan as Status,
      halal: data.halal as Status
    };
  } catch (error) {
    console.error("AI Fetch Error:", error);
    return null;
  }
};
