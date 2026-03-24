const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

export const askGemini = async (question, schemeData, fullDatabase = []) => {
  if (!API_KEY || API_KEY === "your_api_key_here") {
    return "Please replace the placeholder API key in the .env file with a real Gemini API key.";
  }

  // Optimize context: if we have a full database, only pass essential info to avoid token bloat
  let dataContext = "";
  if (schemeData) {
    dataContext = `
      CURRENT SCHEME:
      Name: ${schemeData.name}
      Benefits: ${schemeData.benefits}
      Eligibility: ${schemeData.eligibility}
      Documents: ${schemeData.documents.join(", ")}
    `;
  } else if (fullDatabase.length > 0) {
    // Only pass name and benefit summary to keep it clean
    dataContext = `
      SCHEME DIRECTORY SUMMARY:
      ${fullDatabase.map(s => `- ${s.name}: ${s.category} focus. Benefits: ${s.benefits.substring(0, 150)}...`).join("\n")}
    `;
  }

  const prompt = `
    You are LUNAR AI, an expert advisor for Indian Government Schemes.
    
    KNOWLEDGE BASE:
    ${dataContext}

    USER QUESTION:
    ${question}

    INSTRUCTIONS:
    1. If the user asks about applying for a specific scheme in the list, explain the benefits and documents.
    2. Guide them to click "Details" to see the full stepper guide.
    3. Keep responses professional, encouraging, and clear.
    4. If the question is unrelated to schemes, politely bring them back to the topic.

    RESPONSE:
  `;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });

    const data = await response.json();

    // Debugging logs to help identify the issue in the console
    if (data.error) {
      console.error("Gemini API Error:", data.error);
      return `AI Error: ${data.error.message || "Failed to communicate with the AI core."}`;
    }

    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!aiResponse) {
      console.warn("Gemini Response Structure:", data);
      return "I'm having trouble thinking right now. This might be due to an invalid API key or safety filters. Please check the browser console for details.";
    }

    return aiResponse.trim();
  } catch (error) {
    console.error("AI Request Failed:", error);
    return "Technical error: Could not reach the AI service. Please ensure your internet is active and the API key is valid.";
  }
};
