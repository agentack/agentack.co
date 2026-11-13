"use client";

import { useSyncExternalStore } from "react";
import { getTheme, setTheme, subscribe } from "@/lib/theme";
import { Moon, Sun } from "@/components/ui/icons";

type ThemeToggleProps = {
  lightLabel?: string;
  darkLabel?: string;
};

export function ThemeToggle({
  lightLabel = "Switch to light theme",
  darkLabel = "Switch to dark theme",
}: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light" as const);

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={theme === "dark" ? lightLabel : darkLabel}
      className="grid size-11 place-items-center rounded-control border border-[var(--border)] text-[var(--headline)] transition-colors duration-[var(--dur-fast)] hover:bg-[var(--soft)]"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}
