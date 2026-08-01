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
    description:
      "A full-stack industrial IoT chatbot dashboard for a simulated Tata Steel-like factory environment. Ask natural language questions about welding, gas cutting, and cladding operations — the AI generates SQL, queries the database, and returns a human-friendly answer.",
    problem:
      "Factory engineers needed real-time, plain-English insights from dense industrial telemetry data — without writing SQL or jumping between dashboards.",
    approach:
      "Built a two-pass Gemini pipeline: the first call translates a natural language question into a safe, read-only SQL query; the second call narrates the raw results into a human-friendly answer. A live KPI dashboard and machine breakdown view sit alongside the chatbot.",
    technicalSol:
      "Next.js 16 (React 19) frontend with a FastAPI + SQLite backend, both deployed as serverless functions on Vercel. Gemini drives NL-to-SQL and result narration. A strict SELECT-only guard prevents mutation. SQL transparency panel lets users inspect every generated query. Animated stat cards, severity-coded deviation table, and quick-action chips complete the UX.",
    tags: ["Next.js 16", "FastAPI", "SQLite", "Gemini AI", "Python", "Vercel"],
    githubUrl: "https://github.com/doomsday-the/factory-iot-chatbot",
    liveUrl: "https://chatbot-frontend-rho-ashen.vercel.app",
  },
  {
    id: "pulse-ai-news",
    title: "Pulse AI — India Edition",
    status: "In Progress",
    description:
      "A premium, real-time India-centric tech and business news feed powered by The Guardian Open Platform. Tracks Indian companies (Tata, Reliance, Infosys, Zomato), cities, and topics like ISRO, Fintech & UPI, and AI in India — all contextually scoped so 'AI' returns Indian AI news, not global.",
    tags: ["Next.js 16", "TypeScript", "The Guardian API", "Vanilla CSS", "Vercel"],
    githubUrl: "https://github.com/doomsday-the/pules-ai",
    liveUrl: "https://pulse-ai-khaki.vercel.app",
  },
  {
    id: "project-genesis",
    title: "Project Genesis",
    status: "In Progress",
    description:
      "An AI-first Personal Media Companion. Instead of a static tracker, it's a conversational AI that remembers your taste, builds a 'Taste DNA' profile, and delivers explainable recommendations — powered by a multi-tiered memory engine and event-sourced architecture.",
    problem:
      "Media tracking apps like MAL and Letterboxd record data, not taste. They can't remember why you rated something, or understand your nuanced, evolving preferences over time.",
    approach:
      "The AI is the OS — it uses tool calling to operate the app (updating ratings, managing lists) while a dedicated Memory Engine with Working, Semantic, and Taste tiers gives it persistent, structured memory across conversations.",
    technicalSol:
      "Next.js App Router + Vercel AI SDK for full-stack TypeScript and LLM streaming. PostgreSQL with pgvector for hybrid semantic search. Event sourcing to reconstruct Taste DNA over time. Recommendation engine is algorithmically computed — math and weights, not LLM guesswork.",
    tags: ["Next.js", "TypeScript", "Vercel AI SDK", "PostgreSQL", "pgvector", "Gemini"],
    githubUrl: "https://github.com/doomsday-the/Project-Genesis",
  },
  {
    id: "coming-soon",
    title: "Coming Soon",
    status: "Coming Soon",
    description: "The next project is in the works. Check back soon.",
    tags: [],
  },
];
