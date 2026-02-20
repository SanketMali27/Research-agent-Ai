import { useState } from "react";
import ResearchForm from "./components/ResearchForm";
import ReportDisplay from "./components/ReportDisplay";
import { runResearch } from "./services/api";

function App() {
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState("");
  const [logs, setLogs] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (topic) => {
    try {
      setLoading(true);
      setError("");
      setReport("");
      setLogs([]);

      const response = await runResearch(topic);
      setReport(response.finalReport);
      setLogs(response.logs || []);
    } catch (err) {
      setError(err.message || "Failed to generate report.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="app-container">
      <header className="hero">
        <h1>🧠 Multi-Agent Research Team</h1>
        <p>
          Researcher, Critic, Synthesizer & Writer collaborate using compressed shared memory.
        </p>
      </header>

      <ResearchForm onSubmit={handleSubmit} loading={loading} />

      {loading && <div className="spinner">⚡ Agents collaborating...</div>}
      {error && <div className="error">{error}</div>}

      <ReportDisplay report={report} logs={logs} />
    </main>
  );
}

export default App;