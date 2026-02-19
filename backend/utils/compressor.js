const { callLLM } = require("../services/llmService");

async function compressToBullets(text) {
  const systemPrompt =
    "You are a compression utility. Convert the input into 5-8 concise bullet points that preserve key meaning and evidence.";
  const userPrompt = [
    "Compress the following content into concise bullets.",
    "Output only bullet points beginning with '- '.",
    "",
    text
  ].join("\n");

  const compressed = await callLLM(systemPrompt, userPrompt, 0.2);

  const lines = compressed
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "));

  if (lines.length > 0) {
    return lines.slice(0, 8).join("\n");
  }

  const fallback = text
    .split(/[.?!]\s+/)
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 6)
    .map((s) => `- ${s}`);

  return fallback.join("\n");
}

module.exports = { compressToBullets };
