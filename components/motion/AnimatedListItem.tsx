"use client"

import type { PropsWithChildren } from "react"

import { motion, type Variant } from "framer-motion"

type AnimatedListItemProps = PropsWithChildren<{
  className?: string
  variants: {
    visible: Variant
    hidden: Variant
  }
}>

export default function AnimatedListItem({ className, children, variants }: AnimatedListItemProps) {
  return (
    <motion.li className={className} variants={variants}>
      {children}
    </motion.li>
  )
}
