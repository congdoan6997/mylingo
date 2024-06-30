"use client"

import type { PropsWithChildren } from "react"

import { motion, type Variant } from "framer-motion"

type AnimatedListProps = PropsWithChildren<{
  className?: string
  variants: {
    visible: Variant
    hidden: Variant
  }
}>

export default function AnimatedList({ className, children, variants }: AnimatedListProps) {
  return (
    <motion.ul
      className={className}
      variants={variants}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
    >
      {children}
    </motion.ul>
  )
}
