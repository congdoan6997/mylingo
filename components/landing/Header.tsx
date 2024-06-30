import NextLink from "next/link"
import { ThemeToggle } from "@/components/theme/toggle"
import { Button } from "@/components/ui/button"

import LogoSVG from "@/public/logo.svg"
import GithubSVG from "@/public/img/github.svg"

export default function Header() {
  return (
    <header className="relative flex justify-center">
      <div className="z-1 flex w-full items-center justify-between gap-2 px-2 sm:px-8">
        <div className="flex flex-1 items-center justify-start gap-1 max-sm:hidden">
          <Button asChild variant="ghost" size="icon">
            <a
              href="https://github.com/congdoan6997/mylingo"
              target="_blank"
              aria-label="GitHub repo"
              title="Github repo"
            >
              <GithubSVG className="size-6" />
            </a>
          </Button>
          <ThemeToggle />
        </div>
        <NextLink
          href="/"
          title="Lingo app"
          className="group flex h-16 w-14 flex-col items-center gap-1 rounded-b-3xl bg-secondary/30 px-[6px] pt-2 text-2xl transition-colors hover:bg-primary/25 dark:bg-card dark:hover:bg-border/70 sm:size-32 sm:rounded-b-4xl sm:pt-4 sm:text-3xl lg:w-36 lg:text-4xl"
        >
          <LogoSVG className="w-[1.5em] group-hover:animate-bounce" />
          <p className="font-display -tracking-widest max-sm:sr-only">Lingo</p>
        </NextLink>
        <div className="flex flex-1 items-center justify-end">
          {/* TODO: add login clerk */}
          <Button variant="ghost">Login</Button>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 z-50 sm:hidden">
        <ThemeToggle className="size-12 border border-solid border-border bg-card/40 backdrop-blur-lg" />
      </div>
    </header>
  )
}
