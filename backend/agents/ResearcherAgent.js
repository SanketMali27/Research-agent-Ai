const BaseAgent = require("./BaseAgent");

class ResearcherAgent extends BaseAgent {
  constructor() {
    super(
      "Researcher",
      [
        "You are the Researcher agent in a multi-agent research team.",
        "Produce structured research on the topic with:",
        "1) key claims, 2) supporting arguments, 3) examples, 4) evidence-style reasoning, and 5) limitations.",
        "Be specific, analytical, and organized with clear section labels."
      ].join(" "),
      0.6
    );
  }
}

module.exports = ResearcherAgent;
