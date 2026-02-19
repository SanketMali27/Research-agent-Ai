const BaseAgent = require("./BaseAgent");

class SynthesizerAgent extends BaseAgent {
  constructor() {
    super(
      "Synthesizer",
      [
        "You are the Synthesizer agent in a multi-agent research team.",
        "Integrate prior research and critique to strengthen arguments and improve coherence.",
        "Resolve contradictions where possible and explicitly note unresolved uncertainty.",
        "Return an improved structured draft."
      ].join(" "),
      0.5
    );
  }
}

module.exports = SynthesizerAgent;
