📘 Project Documentation
🔹 Project Title

Multi-Agent Research Team (MERN + Groq LLM)

🔹 Project Overview

This project implements a collaborative multi-agent AI research system built using the MERN stack.

The system simulates a team of AI agents that coordinate using compressed shared memory to produce high-quality research reports efficiently while reducing token usage.

🔹 Architecture Overview
User Topic
   ↓
Researcher Agent
   ↓
Compressed Memory
   ↓
Critic Agent
   ↓
Compressed Memory
   ↓
Synthesizer Agent
   ↓
Writer Agent
   ↓
Final Research Report

🔹 Agents Description

1. Researcher Agent

Generates structured research

Provides arguments, evidence, and examples

2. Critic Agent

Identifies logical gaps

Suggests improvements

Evaluates clarity and structure

3. Synthesizer Agent

Improves research based on critique

Strengthens reasoning

Refines structure

4. Writer Agent

Produces final polished academic-style report

🔹 Compressed Context Sharing

Instead of passing full conversation history between agents, the system:

Compresses each agent’s output into 5–8 bullet points

Stores it in shared memory

Passes only compressed memory to the next agent

This reduces:

Token usage

API cost

Context overload

🔹 Tech Stack

Frontend: React

Backend: Node.js + Express

LLM Provider: Groq (Llama 3.1)

Environment: MERN stack

Architecture: Multi-agent orchestration

🔹 How To Run

Backend:

npm install
npm run dev


Frontend:

npm install
npm run dev
