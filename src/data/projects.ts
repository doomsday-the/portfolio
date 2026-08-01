export type Project = {
  id: string;
  title: string;
  status: "Featured" | "In Progress" | "Completed" | "Coming Soon";
  description: string;
  company?: string;
  problem?: string;
  approach?: string;
  technicalSol?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
};

export const projectsData: Project[] = [
  {
    id: "tata-steel-analytics",
    title: "Tata Steel IoT Intelligence Dashboard",
    status: "Featured",
    company: "Tata Steel — Summer Internship",
    description: "A full-stack industrial IoT chatbot dashboard for a simulated Tata Steel-like factory environment. Ask natural language questions about welding, gas cutting, and cladding operations — the AI generates SQL, queries the database, and returns a human-friendly answer.",
    problem: "Factory engineers needed real-time, plain-English insights from dense industrial telemetry data without writing SQL or switching between multiple tools.",
    approach: "Built a NL-to-SQL pipeline using Gemini to translate natural language questions into SQL queries against a live factory database, with results summarised back into a human-friendly answer.",
    technicalSol: "Next.js 16 frontend with a FastAPI + SQLite backend deployed serverlessly on Vercel. Gemini handles both SQL generation and result narration. Read-only SELECT guard prevents any data mutation. SQL transparency panel lets users inspect the generated query.",
    tags: ["Next.js", "FastAPI", "SQLite", "Gemini AI", "Python", "Vercel"],
    githubUrl: "https://github.com/doomsday-the/factory-iot-chatbot",
    liveUrl: "https://chatbot-frontend-rho-ashen.vercel.app",
  },
  {
    id: "pulse-ai-news",
    title: "Pulse",
    status: "In Progress",
    description: "Personalized AI news PWA tailored for the Indian market.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Gemini AI"],
    githubUrl: "https://github.com/doomsday-the/pules-ai"
  },
  {
    id: "project-genesis",
    title: "Project Genesis",
    status: "In Progress",
    description: "An AI-first Personal Media Companion. Instead of a static tracker, it's a conversational AI that remembers your taste, builds a 'Taste DNA' profile, and delivers explainable recommendations — powered by a multi-tiered memory engine and event-sourced architecture.",
    problem: "Media tracking apps like MAL and Letterboxd record data, not taste. They can't remember *why* you rated something, or understand your nuanced, idiosyncratic preferences.",
    approach: "Built an AI agent at the core that uses tool calling to operate the app. A dedicated Memory Engine (Working, Semantic, Taste tiers) gives the AI persistent, structured memory across conversations.",
    technicalSol: "Next.js App Router + Vercel AI SDK for full-stack TypeScript and streaming. PostgreSQL with pgvector for hybrid semantic search. Event sourcing for reconstructing Taste DNA. Computed recommendation engine — math, not LLM magic.",
    tags: ["Next.js", "TypeScript", "Vercel AI SDK", "PostgreSQL", "pgvector", "Gemini"],
    githubUrl: "https://github.com/doomsday-the/Project-Genesis"
  },
  {
    id: "coming-soon",
    title: "Coming Soon",
    status: "Coming Soon",
    description: "The next project is in the works. Check back soon.",
    tags: []
  }
];
