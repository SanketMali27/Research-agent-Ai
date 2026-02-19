const OpenAI = require("openai");

const MODEL = "llama-3.1-8b-instant";
const BASE_URL = "https://api.groq.com/openai/v1";

async function callLLM(systemPrompt, userPrompt, temperature = 0.4) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    throw new Error("GROQ_API_KEY is not set");
  }

  const client = new OpenAI({
    apiKey,
    baseURL: BASE_URL
  });

  try {
    const response = await client.chat.completions.create({
      model: MODEL,
      temperature,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ]
    });

    return response.choices?.[0]?.message?.content?.trim() || "";
  } catch (error) {
    if (error?.status === 429) {
      throw new Error("Rate limit reached for Groq API. Please retry shortly.");
    }

    throw new Error(error?.message || "Groq LLM request failed.");
  }
}

module.exports = { callLLM };
