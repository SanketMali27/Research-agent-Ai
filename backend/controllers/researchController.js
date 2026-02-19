const mongoose = require("mongoose");
const ResearcherAgent = require("../agents/ResearcherAgent");
const CriticAgent = require("../agents/CriticAgent");
const SynthesizerAgent = require("../agents/SynthesizerAgent");
const WriterAgent = require("../agents/WriterAgent");
const SharedMemory = require("../utils/sharedMemory");
const { compressToBullets } = require("../utils/compressor");
const Research = require("../models/Research");

async function runAndStore(agent, input, sharedMemory, logs) {
  const result = await agent.run(input, sharedMemory);
  const compressed = await compressToBullets(result.rawOutput);

  sharedMemory.addEntry(agent.name, compressed);
  logs.push({
    agent: agent.name,
    output: result.rawOutput,
    compressed
  });

  return result.rawOutput;
}

async function runResearchPipeline(req, res) {
  try {
    const topic = req.body?.topic?.trim();

    if (!topic) {
      return res.status(400).json({ error: "Topic is required." });
    }

    const researcher = new ResearcherAgent();
    const critic = new CriticAgent();
    const synthesizer = new SynthesizerAgent();
    const writer = new WriterAgent();
    const sharedMemory = new SharedMemory();
    const logs = [];

    const researchOutput = await runAndStore(
      researcher,
      `Research topic: ${topic}`,
      sharedMemory,
      logs
    );

    const critique1 = await runAndStore(
      critic,
      `Critique this research draft:\n\n${researchOutput}`,
      sharedMemory,
      logs
    );

    const synth1 = await runAndStore(
      synthesizer,
      [
        "Improve the research using this critique.",
        "",
        "Current Draft:",
        researchOutput,
        "",
        "Critique:",
        critique1
      ].join("\n"),
      sharedMemory,
      logs
    );

    const critique2 = await runAndStore(
      critic,
      `Second-pass critique of this revised draft:\n\n${synth1}`,
      sharedMemory,
      logs
    );

    const synth2 = await runAndStore(
      synthesizer,
      [
        "Final improvement pass based on second critique.",
        "",
        "Revised Draft:",
        synth1,
        "",
        "Second Critique:",
        critique2
      ].join("\n"),
      sharedMemory,
      logs
    );

    const finalReport = await runAndStore(
      writer,
      [
        `Topic: ${topic}`,
        "",
        "Use the latest synthesis as the base report:",
        synth2
      ].join("\n"),
      sharedMemory,
      logs
    );

    if (mongoose.connection.readyState === 1) {
      await Research.create({
        topic,
        finalReport,
        logs
      });
    }

    return res.json({
      topic,
      finalReport,
      logs,
      compressedContext: sharedMemory.getCompressedContext()
    });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to run research pipeline.",
      details: error.message
    });
  }
}

module.exports = { runResearchPipeline };
