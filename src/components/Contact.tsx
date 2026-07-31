"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-neutral-200 dark:border-neutral-800 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <h3 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-neutral-50">Let's Connect</h3>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex justify-center items-center gap-6">
          <Link
            href={profileData.links.email}
            className="flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 rounded-full font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </Link>
          <Link
            href={profileData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
          >
            <FaGithub className="w-6 h-6" />
          </Link>
          <Link
            href={profileData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
          >
            <FaLinkedin className="w-6 h-6" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
