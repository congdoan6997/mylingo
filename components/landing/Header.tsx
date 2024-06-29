import { ThemeToggle } from "@/components/theme/toggle"
import { Button } from "@/components/ui/button"

import LogoSVG from "@/public/logo.svg"
import GithubSVG from "@/public/github.svg"

export default function Header() {
  return (
    <header className="relative flex justify-center">
      <div className="absolute top-0 h-16 w-14 rounded-b-3xl bg-secondary/30 dark:bg-card max-sm:left-1 sm:size-32 sm:rounded-b-4xl lg:h-36 lg:w-40" />
      <div className="z-10 flex w-full items-center justify-between gap-2 px-2 sm:px-8 sm:pt-4">
        <div className="flex flex-1 items-center justify-start gap-1 max-sm:hidden">
          <Button asChild variant="ghost" size="icon">
            <a
              href="https://github.com/congdoan6997/mylingo"
              target="_blank"
              aria-label="GitHub repo"
              title="Github repo"
            >
              <GithubSVG />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="text-2xl">
            <ThemeToggle idPrefix="web" />
          </Button>
        </div>
        <div className="flex flex-col items-center gap-1 px-[6px] text-2xl sm:text-3xl lg:text-4xl">
          <LogoSVG className="w-[1.5em]" />
          <p className="font-display -tracking-widest max-sm:hidden">Lingo</p>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Button variant="ghost">Login</Button>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 z-50 sm:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="size-12 border border-solid border-border bg-card/40 text-2xl backdrop-blur-lg"
          asChild
        >
          <ThemeToggle idPrefix="mobile" />
        </Button>
      </div>
    </header>
  )
}
