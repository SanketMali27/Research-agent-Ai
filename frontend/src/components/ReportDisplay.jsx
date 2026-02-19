function ReportDisplay({ report, logs }) {
  if (!report) {
    return null;
  }

  return (
    <section className="report-section">
      <h2>Final Report</h2>
      <article className="report-content">
        {report.split("\n").map((line, idx) => (
          <p key={`${idx}-${line.slice(0, 20)}`}>{line || "\u00A0"}</p>
        ))}
      </article>

      <h2>Agent Logs</h2>
      <div className="logs">
        {logs.map((log, index) => (
          <div className="log-card" key={`${log.agent}-${index}`}>
            <h3>
              {index + 1}. {log.agent}
            </h3>
            <pre>{log.compressed}</pre>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReportDisplay;
