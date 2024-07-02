"use client"

import { useToggle } from "../theme/useToggle"
import { Button, type ButtonProps } from "../ui/button"
import { cn } from "@/lib/utils"

export default function SideMenuThemeButton({ className, ...props }: ButtonProps) {
  const { isDark, toggle, mounted, theme } = useToggle()
  return (
    <Button
      variant="ghost"
      className="h-auto w-full justify-start py-2 text-foreground/85 sm:max-lg:w-auto sm:max-lg:px-2"
      title="Toggle theme"
      {...props}
      onClick={toggle}
    >
      <span
        className={cn("flex size-10 items-center justify-center rounded-full text-3xl", {
          "bg-loading": !mounted,
        })}
      >
        {mounted && (isDark ? "🌛" : "🌞")}
      </span>
      <span className="ml-5 truncate sm:max-lg:sr-only">
        <span className="text-muted-foreground/85">Theme: </span>
        {mounted && theme}
      </span>
    </Button>
  )
}
