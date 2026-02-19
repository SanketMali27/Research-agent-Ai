const { callLLM } = require("../services/llmService");

class BaseAgent {
  constructor(name, systemPrompt, temperature = 0.4) {
    this.name = name;
    this.systemPrompt = systemPrompt;
    this.temperature = temperature;
  }

  async run(input, sharedMemory) {
    const compressedContext = sharedMemory.getCompressedContext();
    const userPrompt = [
      `Task Input:\n${input}`,
      "",
      "Compressed Shared Memory:",
      compressedContext || "- (empty)"
    ].join("\n");

    const rawOutput = await callLLM(this.systemPrompt, userPrompt, this.temperature);

    return {
      agent: this.name,
      rawOutput
    };
  }
}

module.exports = BaseAgent;
