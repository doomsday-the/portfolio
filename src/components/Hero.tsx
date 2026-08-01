"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { Mail, FileText, Phone } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="min-h-[85vh] flex flex-col justify-center pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Accent pill above name */}
        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border"
          style={{ color: "var(--color-accent)", borderColor: "var(--color-accent-muted)", background: "var(--color-accent-muted)" }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--color-accent)" }} />
          Open to opportunities
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4" style={{ color: "var(--color-text)" }}>
          {profileData.name}
        </h1>
        <h2 className="text-xl md:text-2xl font-medium mb-8" style={{ color: "var(--color-muted)" }}>
          {profileData.role}{" "}
          <span style={{ color: "var(--color-accent)", opacity: 0.85 }}>·</span>{" "}
          <span>{profileData.tagline}</span>
        </h2>

        <div className="flex items-center gap-4">
          <Link
            href={profileData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 rounded-full transition-colors group"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5 text-neutral-700 dark:text-neutral-300 group-hover:text-[var(--color-accent)] transition-colors" />
          </Link>
          <Link
            href={profileData.links.phone!}
            className="p-3 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 rounded-full transition-colors group"
            aria-label="Phone"
          >
            <Phone className="w-5 h-5 text-neutral-700 dark:text-neutral-300 group-hover:text-[var(--color-accent)] transition-colors" />
          </Link>
          <Link
            href={profileData.links.email}
            className="p-3 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 rounded-full transition-colors group"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-neutral-700 dark:text-neutral-300 group-hover:text-[var(--color-accent)] transition-colors" />
          </Link>
          <Link
            href={profileData.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-white transition-all hover:scale-105 hover:shadow-lg"
            style={{ background: "var(--color-accent)", boxShadow: "0 0 0 0 var(--color-accent)" }}
          >
            <FileText className="w-4 h-4" />
            Resume
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
