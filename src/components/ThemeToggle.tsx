"use client";

import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme, type Theme } from "@/components/ThemeProvider";

const OPTIONS: { value: Theme; icon: typeof Sun; label: string }[] = [
  { value: "system", icon: Monitor, label: "System theme" },
  { value: "light",  icon: Sun,     label: "Light mode"   },
  { value: "dark",   icon: Moon,    label: "Dark mode"    },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="flex items-center gap-0.5 rounded-full p-0.5 border border-cafe-border"
      style={{ background: "var(--cafe-surface)" }}
      role="group"
      aria-label="Theme"
    >
      {OPTIONS.map(({ value, icon: Icon, label }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            onClick={() => setTheme(value)}
            aria-label={label}
            aria-pressed={active}
            className={`
              flex items-center justify-center w-7 h-7 rounded-full
              transition-colors duration-150 cursor-pointer
              ${active
                ? "bg-cafe-accent text-cafe-bg"
                : "text-cafe-muted hover:text-cafe-text"
              }
            `}
          >
            <Icon size={13} strokeWidth={2} aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}
