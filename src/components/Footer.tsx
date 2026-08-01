import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-neutral-500 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex flex-col items-center gap-3">
        <Link href="https://github.com/doomsday-the" target="_blank" rel="noopener noreferrer"
          className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
          <FaGithub className="w-5 h-5" />
        </Link>
        <p>© {new Date().getFullYear()} Arush Mehta. Built with Next.js.</p>
      </div>
    </footer>
  );
}
