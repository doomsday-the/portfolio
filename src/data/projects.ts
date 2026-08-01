export type Project = {
  id: string;
  title: string;
  status: "Featured" | "In Progress" | "Completed";
  description: string;
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
    title: "Industrial IoT Analytics Platform",
    status: "Featured",
    description: "Built during Tata Steel internship. An analytics platform with Gemini-powered NL-to-SQL chatbot.",
    problem: "Need for real-time insights from massive industrial IoT sensor data streams.",
    approach: "Developed PostgreSQL analytics views, Power BI dashboards, and a natural language to SQL chatbot using Gemini and FastAPI.",
    technicalSol: "Optimized complex SQL queries reducing dashboard load time significantly, and designed a robust Streamlit UI.",
    tags: ["PostgreSQL", "Power BI", "FastAPI", "Streamlit", "Gemini AI"],
    githubUrl: "#",
    liveUrl: "#",
    image: "/api/placeholder/800/400"
  },
  {
    id: "pulse-ai-news",
    title: "Pulse",
    status: "In Progress",
    description: "Personalized AI news PWA tailored for the Indian market.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Gemini AI"],
    githubUrl: "#"
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
  }
];
