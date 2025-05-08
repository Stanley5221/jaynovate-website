"use client"

import type React from "react"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  once?: boolean
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 500,
  once = true,
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1, freezeOnceVisible: once })

  const directionClasses = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
    none: "opacity-0",
  }

  const initialClass = direction === "none" ? "opacity-0" : `opacity-0 ${directionClasses[direction]}`
  const animatedClass = "opacity-100 translate-x-0 translate-y-0"

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={cn(
        className,
        initialClass,
        isIntersecting ? animatedClass : "",
        "transition-all ease-out will-change-transform will-change-opacity",
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </section>
  )
}
