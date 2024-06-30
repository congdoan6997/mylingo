import NextImage from "next/image"
import type { Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import AnimatedTitle from "@/components/motion/AnimatedTitle"
import AnimatedList from "@/components/motion/AnimatedList"
import AnimatedListItem from "@/components/motion/AnimatedListItem"

import { languages } from "@/config/languages"

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
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45 } },
  hidden: { opacity: 0, scale: 0.4 },
}
export default function Languages() {
  return (
    <section className="space-y-20 px-4 py-8 sm:px-[10%] md:my-20">
      <AnimatedTitle>
        <h2 className="heading-section">
          I want to <span className="text-highlight-depth">learn...</span>
        </h2>
      </AnimatedTitle>
      <div className="mx-auto max-w-screen-lg">
        <AnimatedList
          variants={list}
          className="flex flex-wrap items-center justify-center gap-2 lg:gap-4"
        >
          {languages.map(({ title, flag }) => (
            <AnimatedListItem key={title} variants={item} className="basis-28 md:basis-40">
              <Button
                variant="ghost"
                size="lg"
                className="size-full flex-wrap bg-secondary/10 px-0 pb-4 transition active:scale-95 lg:text-base"
              >
                <AspectRatio className="!top-1/2 mx-auto size-1/2 -translate-y-1/2" ratio={3 / 2}>
                  <NextImage
                    src={`/img/flags/${flag}.svg`}
                    alt={`${title} flag`}
                    fill
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
                <span>{title}</span>
              </Button>
            </AnimatedListItem>
          ))}
        </AnimatedList>
      </div>
    </section>
  )
}
