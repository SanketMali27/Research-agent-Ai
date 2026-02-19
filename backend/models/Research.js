const mongoose = require("mongoose");

const ResearchSchema = new mongoose.Schema(
  {
    topic: { type: String, required: true },
    finalReport: { type: String, required: true },
    logs: { type: Array, default: [] }
  },
  { timestamps: true }
);

module.exports = mongoose.models.Research || mongoose.model("Research", ResearchSchema);
