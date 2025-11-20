"use client";

import { useTheme } from "@/src/contexts/theme-context";
import { Button } from "@/src/components/utils/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "light" ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
