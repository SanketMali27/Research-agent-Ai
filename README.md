# Multi-Agent Research Team (MERN)

Simplified collaborative AI research system with 4 agents:
- Researcher
- Critic
- Synthesizer
- Writer

Agents coordinate through compressed shared memory and produce a final research report.

## Project Structure

```text
.
|-- backend
|   |-- .env.example
|   |-- agents
|   |   |-- BaseAgent.js
|   |   |-- CriticAgent.js
|   |   |-- ResearcherAgent.js
|   |   |-- SynthesizerAgent.js
|   |   `-- WriterAgent.js
|   |-- controllers
|   |   `-- researchController.js
|   |-- models
|   |   `-- Research.js
|   |-- package.json
|   |-- routes
|   |   `-- researchRoutes.js
|   |-- server.js
|   |-- services
|   |   `-- llmService.js
|   `-- utils
|       |-- compressor.js
|       `-- sharedMemory.js
|-- frontend
|   |-- index.html
|   |-- package.json
|   |-- src
|   |   |-- App.jsx
|   |   |-- components
|   |   |   |-- ReportDisplay.jsx
|   |   |   `-- ResearchForm.jsx
|   |   |-- main.jsx
|   |   |-- services
|   |   |   `-- api.js
|   |   `-- styles.css
|   `-- vite.config.js
|-- package.json
`-- README.md
```

## Run

1. Copy env file and set key:
   - `backend/.env.example` -> `backend/.env`
   - Set `GROQ_API_KEY`
2. Install:
   - `npm install`
3. Start backend + frontend:
   - `npm run dev`

Frontend: `http://localhost:5173`  
Backend: `http://localhost:5000`

## API

`POST /api/research`

Request:

```json
{
  "topic": "Your research topic"
}
```

Response includes:
- `finalReport`
- `logs` (intermediate agent outputs + compressed summaries)
- `compressedContext`

## Pipeline

1. Researcher
2. Critic
3. Synthesizer
4. Critic
5. Synthesizer
6. Writer

Each step is compressed into bullet-point memory for token-efficient context sharing.
