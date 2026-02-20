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
    <form className="research-form card" onSubmit={handleSubmit}>
      <label htmlFor="topic">🔎 Research Topic</label>
      <input
        id="topic"
        type="text"
        value={topic}
        placeholder="Example: World War 2 economic impact"
        onChange={(event) => setTopic(event.target.value)}
        disabled={loading}
      />
      <button type="submit" disabled={loading || !topic.trim()}>
        {loading ? "Running Agents..." : "Generate Report"}
      </button>
    </form>
  );
}

export default ResearchForm;