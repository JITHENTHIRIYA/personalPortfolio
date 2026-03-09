import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeToggleProps {
  onToggle?: () => void;
}

export const ThemeToggle = ({ onToggle }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
        onToggle?.();
      }}
      className="w-9 h-9 flex items-center justify-center rounded-full border border-border/50 bg-card/60 backdrop-blur-sm text-foreground hover:bg-accent transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
};
