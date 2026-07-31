"use client";

import { motion } from "framer-motion";
import { skillsData, currentlyLearning } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-neutral-200 dark:border-neutral-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8 text-neutral-900 dark:text-neutral-50">Skills & Technologies</h3>
            <div className="space-y-8">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category}>
                  {/* Accent underline on category label */}
                  <h4 className="text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-2"
                    style={{ color: "var(--color-accent)" }}>
                    <span className="h-px w-4 inline-block" style={{ background: "var(--color-accent)" }} />
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map(skill => (
                      <span key={skill}
                        className="px-4 py-2 rounded-lg text-sm font-medium border border-neutral-200/50 dark:border-neutral-800/50 bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-neutral-900 dark:text-neutral-50">Currently Learning</h3>
            <ul className="space-y-4">
              {currentlyLearning.map((topic, i) => (
                <li key={topic} className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400">
                  <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-accent)" }} />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
