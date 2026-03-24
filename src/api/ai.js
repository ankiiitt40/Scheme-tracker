const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const API_URL = "https://api.openai.com/v1/chat/completions";

export const askAI = async (question, schemeData, fullDatabase = []) => {
  if (!API_KEY || API_KEY.includes("your_openai_key")) {
    return "Please link your OpenAI API key in the .env file to activate LUNAR AI.";
  }

  let dataContext = "";
  if (schemeData) {
    dataContext = `
      CURRENT SCHEME FOCUS:
      Name: ${schemeData.name}
      Type: ${schemeData.type}
      Category: ${schemeData.category}
      Benefits: ${schemeData.benefits}
      Eligibility: ${schemeData.eligibility}
      Documents: ${schemeData.documents.join(", ")}
    `;
  } else if (fullDatabase.length > 0) {
    dataContext = `
      DIRECTORY OF SCHEMES:
      ${fullDatabase.slice(0, 15).map(s => `- ${s.name} (${s.category}): ${s.benefits.substring(0, 80)}...`).join("\n")}
    `;
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `You are LUNAR AI, an elite Government Scheme expert. 

            SYSTEMATIC RESPONSE RULES:
            1. Use Markdown for structuring. 
            2. For scheme questions, always provide:
               - **Overview**: A brief summary.
               - **Key Benefits**: Bullet points of what the user gets.
               - **Eligibility**: Clear criteria.
               - **Steps to Apply**: Mention clicking the 'Details' button for the full guide.
            3. Keep it professional and visually clean.
            4. If multiple schemes match, list them as: ### [Scheme Name]
            5. Use bold text for emphasis but avoid over-formatting.
            
            Context: ${dataContext}`
          },
          {
            role: "user",
            content: question
          }
        ],
        temperature: 0.5
      })
    });

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error calling OpenAI AI:", error);
    return "I'm having trouble connecting to my neural core. Please try again later.";
  }
};
