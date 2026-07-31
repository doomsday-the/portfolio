import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Arush Mehta | Portfolio",
  description: "CS student @ VIT Vellore | Building AI tools & data pipelines",
  openGraph: {
    title: "Arush Mehta | Portfolio",
    description: "CS student @ VIT Vellore | Building AI tools & data pipelines",
    images: [{ url: "/api/placeholder/1200/630" }],
  },
  other: {
    "darkreader-lock": "",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased selection:bg-neutral-200 dark:selection:bg-neutral-800`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main className="max-w-5xl mx-auto px-6 pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
