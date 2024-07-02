import type { Variants } from "framer-motion"
import { Globe } from "lucide-react"
import NextLink from "next/link"
import { ClerkLoaded, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { MotionDiv } from "@/components/motion"
import AnimatedTitle from "@/components/motion/AnimatedTitle"
import AnimatedList from "@/components/motion/AnimatedList"
import AnimatedListItem from "@/components/motion/AnimatedListItem"
import AnimatedHeroDecor from "@/components/motion/AnimatedHeroDecor"

import LangSVG from "@/public/img/lang.svg"
import VoiceSVG from "@/public/img/voice.svg"
import BulbSVG from "@/public/img/bulb.svg"
import RewardSVG from "@/public/img/reward.svg"

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.5,
    },
  },
  hidden: { opacity: 0 },
} satisfies Variants

const item = {
  visible: { opacity: 1, y: "0%", scale: 1, transition: { duration: 0.45 } },
  hidden: { opacity: 0, y: "100%", scale: 0.85 },
} satisfies Variants

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-8 pt-32 lg:pr-24">
      <AnimatedTitle>
        <h1 className="flex w-full flex-col items-center justify-center gap-2 text-balance py-6 text-center font-display text-3xl font-bold capitalize leading-normal tracking-tighter sm:text-4xl sm:leading-snug md:gap-4 md:text-6xl">
          <span>
            Master any{" "}
            <span className="rounded-full border border-highlight/25 bg-highlight/50 px-[0.35em] py-[0.125em] text-highlight-depth dark:bg-highlight/85 dark:text-foreground">
              language.
            </span>
          </span>
          <span className="flex flex-wrap items-center justify-center">
            Learn{" "}
            <span className="group relative ml-[0.25em] flex h-[1.35em] w-[1.5em] items-center justify-center rounded-full bg-secondary/30 dark:text-secondary">
              <Globe
                strokeWidth={2.15}
                className="z-1 size-[1.25em] group-hover:animate-spin-slow"
              />
            </span>
            <span className="mr-[0.25em]">
              <span className="sr-only">on</span>
              <span className="lowercase" aria-hidden="true">
                n
              </span>
            </span>{" "}
            the go.
          </span>
        </h1>
      </AnimatedTitle>
      <div className="mx-auto min-h-40 max-w-80 py-12">
        <ClerkLoaded>
          <SignedOut>
            <AnimatedList variants={list} className="flex flex-col gap-3">
              <AnimatedListItem variants={item}>
                <SignUpButton mode="modal">
                  <Button className="w-full" variant="primary" size={"lg"}>
                    <span className="truncate">Get Started</span>
                  </Button>
                </SignUpButton>
              </AnimatedListItem>
              <AnimatedListItem variants={item}>
                <SignInButton mode="modal">
                  <Button className="w-full text-secondary" size={"lg"}>
                    <span className="truncate">I already have an account</span>
                  </Button>
                </SignInButton>
              </AnimatedListItem>
            </AnimatedList>
          </SignedOut>
          <SignedIn>
            <MotionDiv
              initial="hidden"
              whileInView="visible"
              variants={item}
              transition={{ delay: 0.5 }}
            >
              <Button variant="primary" size="lg" className="w-full" asChild>
                <NextLink href="/learn" className="truncate">
                  Continue Learning
                </NextLink>
              </Button>
            </MotionDiv>
          </SignedIn>
        </ClerkLoaded>
      </div>

      <div className="z-1 absolute -left-[2%] top-[13%] sm:left-[10%]">
        <AnimatedHeroDecor className="origin-bottom-right" delay={0.8}>
          <div className="size-20 -rotate-12 rounded-lg bg-gradient-to-br from-highlight/70 to-transparent p-2 text-background sm:size-24 lg:size-32">
            <LangSVG />
          </div>
        </AnimatedHeroDecor>
      </div>
      <div className="-z-1 absolute right-[10%] top-[13%] max-md:hidden">
        <AnimatedHeroDecor className="origin-bottom-left" move={60} delay={1}>
          <div className="size-24 rotate-12 rounded-lg bg-gradient-to-bl from-highlight/70 to-transparent p-2 text-background lg:size-32">
            <BulbSVG />
          </div>
        </AnimatedHeroDecor>
      </div>
      <div className="-z-1 absolute bottom-[10%] left-[10%] max-md:hidden">
        <AnimatedHeroDecor className="origin-top-right" move={60} delay={1.2}>
          <div className="size-24 -rotate-6 rounded-lg bg-gradient-to-r from-secondary/30 to-transparent p-2 text-background lg:size-32">
            <RewardSVG />
          </div>
        </AnimatedHeroDecor>
      </div>
      <div className="-z-1 absolute -right-[2%] top-1/3 sm:right-[10%] md:top-2/3">
        <AnimatedHeroDecor className="origin-top-left" delay={1.4}>
          <div className="size-20 rotate-12 rounded-lg bg-gradient-to-l from-secondary/30 to-transparent p-2 text-background sm:size-24 lg:size-32">
            <VoiceSVG />
          </div>
        </AnimatedHeroDecor>
      </div>
    </section>
  )
}
