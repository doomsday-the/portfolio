"use client";

import { motion } from "framer-motion";
import { projectsData, Project } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border bg-white dark:bg-neutral-950/50 transition-all duration-300 hover:shadow-xl"
      style={{ borderColor: "var(--color-accent)", boxShadow: "0 0 0 1px transparent" }}>
      {/* Accent top stripe */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, var(--color-accent), transparent)` }} />
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold tracking-widest uppercase px-2 py-1 rounded-md w-fit"
              style={{ color: "var(--color-accent)", background: "var(--color-accent-muted)" }}>
              ★ Featured Project
            </span>
            {project.company && (
              <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 tracking-wide">
                🏢 {project.company}
              </span>
            )}
          </div>
          <div className="flex gap-3">
            {project.githubUrl && (
              <Link href={project.githubUrl} target="_blank"
                className="text-neutral-500 transition-colors"
                style={{ ["--hover-color" as string]: "var(--color-accent)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--color-accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "")}>
                <FaGithub className="w-5 h-5" />
              </Link>
            )}
            {project.liveUrl && (
              <Link href={project.liveUrl} target="_blank"
                className="text-neutral-500 transition-colors"
                onMouseEnter={e => (e.currentTarget.style.color = "var(--color-accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "")}>
                <ExternalLink className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
        <h4 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">{project.title}</h4>

        <div className="space-y-3 mb-6 text-neutral-600 dark:text-neutral-400">
          <p><strong>The Problem:</strong> {project.problem}</p>
          <p><strong>The Approach:</strong> {project.approach}</p>
          <p><strong>Technical Solution:</strong> {project.technicalSol}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full border"
              style={{ color: "var(--color-accent)", borderColor: "var(--color-accent-muted)", background: "var(--color-accent-muted)" }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function StandardProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 hover:border-[var(--color-accent)] transition-all duration-200 flex flex-col h-full"
      style={{ ["--tw-border-opacity" as string]: "1" }}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">{project.title}</h4>
          {project.status === "In Progress" && (
            <span className="inline-flex items-center gap-1.5 px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded-md mb-3"
              style={{ color: "var(--color-accent)", background: "var(--color-accent-muted)" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--color-accent)" }} />
              In Progress
            </span>
          )}
        </div>
        <div className="flex gap-2">
          {project.githubUrl && (
            <Link href={project.githubUrl} target="_blank"
              className="text-neutral-500 transition-colors"
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "")}>
              <FaGithub className="w-4 h-4" />
            </Link>
          )}
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank"
              className="text-neutral-500 transition-colors"
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "")}>
              <ExternalLink className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 flex-grow">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span key={tag} className="px-2 py-1 text-xs font-medium rounded-md border"
            style={{ color: "var(--color-accent)", borderColor: "var(--color-accent-muted)", background: "var(--color-accent-muted)" }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function ComingSoonCard() {
  return (
    <div className="group relative rounded-xl p-6 border-2 border-dashed border-neutral-300 dark:border-neutral-700 flex flex-col items-center justify-center h-full min-h-[180px] text-center transition-all duration-200 hover:border-[var(--color-accent)]">
      <span className="text-3xl mb-3">🚧</span>
      <h4 className="text-base font-bold text-neutral-400 dark:text-neutral-500 mb-1">Next Project</h4>
      <p className="text-xs text-neutral-400 dark:text-neutral-600">Coming soon — stay tuned.</p>
    </div>
  );
}


export function Projects() {
  const featured = projectsData.filter(p => p.status === "Featured");
  const standard = projectsData.filter(p => p.status !== "Featured");

  return (
    <section id="projects" className="py-20 border-t border-neutral-200 dark:border-neutral-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-10 text-neutral-900 dark:text-neutral-50">Projects</h3>

        <div className="space-y-12">
          <div className="space-y-6">
            {featured.map(project => (
              <FeaturedProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {standard.map(project =>
              project.status === "Coming Soon" ? (
                <ComingSoonCard key={project.id} />
              ) : (
                <StandardProjectCard key={project.id} project={project} />
              )
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
