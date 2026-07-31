"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="py-20 border-t border-neutral-200 dark:border-neutral-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-neutral-50">About Me</h3>
        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-3xl">
          {profileData.bio}
        </p>
      </motion.div>
    </section>
  );
}
