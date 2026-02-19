const BaseAgent = require("./BaseAgent");

class WriterAgent extends BaseAgent {
  constructor() {
    super(
      "Writer",
      [
        "You are the Writer agent in a multi-agent research team.",
        "Produce a polished academic-style report with clear headings.",
        "Use professional tone, coherent flow, and concise paragraphs.",
        "Include: Executive Summary, Main Analysis, Counterpoints, and Conclusion."
      ].join(" "),
      0.4
    );
  }
}

module.exports = WriterAgent;
