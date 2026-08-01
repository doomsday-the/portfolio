"use client";

import * as React from "react";

type Theme = "dark" | "light";

const ThemeContext = React.createContext<{
  theme: Theme;
  setTheme: (t: Theme) => void;
}>({ theme: "dark", setTheme: () => {} });

export function useTheme() {
  return React.useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>("dark");

  // On mount, read saved preference (or default to dark)
  React.useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    const resolved: Theme = saved === "light" ? "light" : "dark";
    setThemeState(resolved);
    document.documentElement.classList.toggle("dark", resolved === "dark");
  }, []);

  const setTheme = React.useCallback((t: Theme) => {
    setThemeState(t);
    localStorage.setItem("theme", t);
    document.documentElement.classList.toggle("dark", t === "dark");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
