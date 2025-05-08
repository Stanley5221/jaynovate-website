"use client"

import type React from "react"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
}

export default function AnimatedText({
  text,
  className,
  delay = 0,
  duration = 50,
  once = true,
  as: Component = "p",
}: AnimatedTextProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1, freezeOnceVisible: once })
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    if (!isIntersecting) return

    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.substring(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, duration)

    return () => clearInterval(interval)
  }, [isIntersecting, text, duration])

  return (
    <Component
      ref={ref as React.RefObject<HTMLParagraphElement>}
      className={cn(className, "relative")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {displayedText}
      <span className={isIntersecting ? "opacity-0" : "opacity-100"} aria-hidden="true">
        {text}
      </span>
    </Component>
  )
}
