"use client"

import type { PropsWithChildren } from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

type AnimatedTitleProps = PropsWithChildren<{
  className?: string
  duration?: number
}>

export default function AnimatedTitle({ className, duration = 1, children }: AnimatedTitleProps) {
  return (
    <motion.div
      className={cn("relative left-1/2 inline-block -translate-x-1/2", className)}
      initial={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
      whileInView={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      viewport={{ once: true }}
      transition={{ duration, ease: [0, 0.55, 0.45, 1] }}
    >
      {children}
    </motion.div>
  )
}
