import { useState } from "react";

function ResearchForm({ onSubmit, loading }) {
  const [topic, setTopic] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedTopic = topic.trim();
    if (!trimmedTopic || loading) return;
    onSubmit(trimmedTopic);
  };

  return (
    <form className="research-form" onSubmit={handleSubmit}>
      <label htmlFor="topic">Research Topic</label>
      <input
        id="topic"
        type="text"
        value={topic}
        placeholder="Example: Impact of AI agents on software R&D productivity"
        onChange={(event) => setTopic(event.target.value)}
        disabled={loading}
      />
      <button type="submit" disabled={loading || !topic.trim()}>
        {loading ? "Running..." : "Generate Report"}
      </button>
    </form>
  );
}

export default ResearchForm;
