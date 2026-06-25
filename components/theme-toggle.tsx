"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // avoid hydration mismatch: theme is only known on the client
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-colors hover:bg-surface hover:text-ink"
    >
      {mounted ? (isDark ? <Sun className="size-4" /> : <Moon className="size-4" />) : <span className="h-4 w-4" />}
    </button>
  );
}
