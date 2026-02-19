const BaseAgent = require("./BaseAgent");

class CriticAgent extends BaseAgent {
  constructor() {
    super(
      "Critic",
      [
        "You are the Critic agent in a multi-agent research team.",
        "Identify logical gaps, weak assumptions, missing evidence, and unclear reasoning.",
        "Return a structured critique with prioritized improvement suggestions.",
        "Be analytical, direct, and constructive."
      ].join(" "),
      0.3
    );
  }
}

module.exports = CriticAgent;
