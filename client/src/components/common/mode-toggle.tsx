import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun, SunMoon } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className="relative"
      variant="secondary"
      size="icon"
      onClick={() =>
        setTheme(
          theme === "light"
            ? "dark"
            : theme === "dark"
            ? "system"
            : theme === "system"
            ? "light"
            : "light"
        )
      }
    >
      {theme === "dark" ? (
        <Moon className="transition-all duration-1000" />
      ) : theme === "light" ? (
        <Sun className="transition-all duration-1000" />
      ) : (
        <SunMoon className="transition-all duration-1000" />
      )}
    </Button>
  );
}
