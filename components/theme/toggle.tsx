"use client"

import { Sun, Moon } from "lucide-react"
import { Button, type ButtonProps } from "../ui/button"
import { useToggle } from "./useToggle"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className, ...props }: ButtonProps) {
  const { isDark, toggle, mounted } = useToggle()
  // TODO: fix layout shift from hydration
  if (!mounted) return null

  return (
    <Button
      variant="ghost"
      size="icon"
      title="Toggle theme"
      aria-label="Toggle theme"
      className={cn("text-2xl", className)}
      onClick={toggle}
      {...props}
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  )
}
