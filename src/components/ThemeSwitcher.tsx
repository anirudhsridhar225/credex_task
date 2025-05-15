"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Switch component
interface SwitchProps {
    checked: boolean;
    onChange: () => void;
}

const Switch = ({ checked, onChange }: SwitchProps) => {
    return (
        <label className="inline-flex items-center cursor-pointer">
            <div className="relative">
                <input
                    type="checkbox"
                    className="sr-only"
                    checked={checked}
                    onChange={onChange}
                />
                <div className={`w-14 h-7 rounded-full transition-colors duration-300 ${checked ? "bg-blue-600" : "bg-gray-400"
                    }`}></div>
                <div className={`absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition-transform duration-300 transform ${checked ? "translate-x-7" : "translate-x-0"
                    }`}></div>
            </div>
            <div className="ml-1 flex items-center">
                {checked ?
                    <Moon className="h-5 w-5 text-gray-400" /> :
                    <Sun className="h-5 w-5 text-yellow-500" />
                }
            </div>
        </label>
    );
};

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    if (!mounted) return null

    return (
        <Switch
            checked={theme === "dark"}
            onChange={toggleTheme}
        />
    );
}