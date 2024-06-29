'use client'

import { useTheme } from "next-themes"
import { useEffect, useState, useCallback } from "react"

import { THEME_DARK, THEME_LIGHT } from "@/components/theme/constants"

export function useToggle() {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    const toggle = useCallback(() => {
        if (resolvedTheme === THEME_LIGHT) {
            setTheme(THEME_DARK)
        } else if (resolvedTheme === THEME_DARK) {
            setTheme(THEME_LIGHT)
        }
    }, [resolvedTheme, setTheme])

    return { mounted, theme: resolvedTheme, toggle, isDark: resolvedTheme === THEME_DARK }
}