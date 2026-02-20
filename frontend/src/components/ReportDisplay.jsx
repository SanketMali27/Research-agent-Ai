import ReactMarkdown from "react-markdown";
import { jsPDF } from "jspdf";
function ReportDisplay({ report, logs }) {
  if (!report) return null;

  const downloadReport = () => {
    const doc = new jsPDF();
    doc.text(report, 10, 10);
    doc.save("research-report.pdf");
  };

  return (
    <section className="report-section">
      <div className="report-header">
        <h2>📄 Final Report</h2>
        <button className="download-btn" onClick={downloadReport}>
          ⬇ Download Report
        </button>
      </div>

      <article className="report-content">
        <ReactMarkdown>{report}</ReactMarkdown>
      </article>

      <h2>🤖 Agent Logs</h2>
      <div className="logs">
        {logs.map((log, index) => (
          <details className="log-card" key={`${log.agent}-${index}`}>
            <summary>
              {index + 1}. {log.agent}
            </summary>
            <pre>{log.compressed}</pre>
          </details>
        ))}
      </div>
    </section>
  );
}

export default ReportDisplay;