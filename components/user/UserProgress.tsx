import NextLink from "next/link"
import NextImage from "next/image"
import { Ban, InfinityIcon } from "lucide-react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

type UserProgressProps = {
  hasActiveSubscription?: boolean
  plain?: boolean
}

export default function UserProgress({ hasActiveSubscription, plain }: UserProgressProps) {
  // TODO get user progress from server
  const userProgress = {
    points: 100,
    hearts: 5,
    activeCourse: {
      title: "Select a course",
      altCode: "vn",
    },
  }
  const { points = 0, hearts = 0, activeCourse } = userProgress ?? {}
  const { title = "Select a course", altCode } = activeCourse ?? {}
  return (
    <div className="flex w-full items-center justify-between gap-x-2">
      <Button>
        <NextLink href="/courses">
          {altCode ? (
            <NextImage
              src={`/img/flags/${altCode}.svg`}
              alt={title}
              width={32}
              height={32}
              className="rounded-md border-2 border-border/80 dark:border-muted-foreground"
            />
          ) : (
            <span
              className={cn("rounded-md border-2 border-current px-2 py-[2px] text-border", {
                "group-hover:text-foreground/85": !plain,
              })}
            >
              <Ban className="size-5" />
              <span className="sr-only">{title}</span>
            </span>
          )}
        </NextLink>
      </Button>
      <Button
        variant="ghost"
        className={plain ? "text-inherit dark:hover:bg-black/10" : "text-orange-500"}
        asChild
      >
        <NextLink href="/shop">
          <NextImage src="/img/icons/xp.svg" alt="points" width={28} height={28} className="mr-2" />
          {points}
        </NextLink>
      </Button>
      <Button
        variant="ghost"
        className={plain ? "text-inherit dark:hover:bg-black/10" : "text-rose-500"}
        asChild
      >
        <NextLink href="/shop">
          <NextImage
            src="/img/icons/heart.svg"
            alt="hearts"
            width={22}
            height={22}
            className="mr-2"
          />
          {hasActiveSubscription ? <InfinityIcon className="size-4" strokeWidth={3} /> : hearts}
        </NextLink>
      </Button>
    </div>
  )
}
