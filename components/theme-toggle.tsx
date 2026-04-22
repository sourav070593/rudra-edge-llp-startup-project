"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof document === "undefined") return true
    return document.documentElement.classList.contains("dark")
  })

  React.useEffect(() => {
    // If the user visits the site, ensure we default to dark if not set
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "dark")
      document.documentElement.classList.add("dark")
      setIsDark(true)
    } else {
      setIsDark(document.documentElement.classList.contains("dark"))
    }
  }, [])

  const toggleTheme = () => {
    const nextDark = !document.documentElement.classList.contains("dark")
    document.documentElement.classList.toggle("dark", nextDark)
    setIsDark(nextDark)
    try {
      localStorage.setItem("theme", nextDark ? "dark" : "light")
    } catch (e) {
      // localStorage might be blocked; still toggle UI for this session.
    }
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </Button>
  )
}

