import { ThemeProviderContext } from "@/contexts/theme-context";
import type { ThemeProps } from "@/types/public";
import { useEffect, useState, type ReactNode } from "react";
type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: ThemeProps;
  storageKey?: string;
};

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "task-management-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeProps>(
    () => (localStorage.getItem(storageKey) as ThemeProps) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: ThemeProps) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
