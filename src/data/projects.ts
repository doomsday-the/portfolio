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
    id: "ytp-video-generator",
    title: "YTP Video Generator",
    status: "Completed",
    description: "Creative-technical experiment building a YTP-style video generator.",
    tags: ["Python", "Pillow", "NumPy", "FFmpeg"],
    githubUrl: "#"
  }
];
