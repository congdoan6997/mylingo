"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Around, type ToggleProps } from "@theme-toggles/react"
import { THEME_DARK, THEME_LIGHT } from "@/components/theme/constants"

export function ThemeToggle(props: ToggleProps) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  const isDark = resolvedTheme === THEME_DARK

  useEffect(() => setMounted(true), [])

  // TODO - fix layout shift from hydration
  if (!mounted) return null

  return (
    <Around
      placeholder={isDark ? "🌙" : "☀️"}
      toggled={isDark}
      toggle={() => setTheme(isDark ? THEME_LIGHT : THEME_DARK)}
      forceMotion
      // TODO - fixes typescript error
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      {...props}
    />
  )
}
