class SharedMemory {
  constructor() {
    this.entries = [];
  }

  addEntry(agentName, content) {
    this.entries.push({
      agentName,
      content,
      timestamp: new Date().toISOString()
    });
  }

  getCompressedContext() {
    return this.entries
      .map(
        (entry, index) =>
          `[${index + 1}] ${entry.agentName} (${entry.timestamp})\n${entry.content}`
      )
      .join("\n\n");
  }

  getEntries() {
    return this.entries;
  }
}

module.exports = SharedMemory;
