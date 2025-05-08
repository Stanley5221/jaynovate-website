"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface AnimatedCounterProps {
  end: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  className?: string
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  delay = 0,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3, freezeOnceVisible: true })
  const countingDone = useRef(false)

  useEffect(() => {
    let startTimestamp: number | null = null
    let animationFrameId: number | null = null

    const countUp = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const currentCount = Math.floor(progress * end)

      setCount(currentCount)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(countUp)
      } else {
        countingDone.current = true
      }
    }

    if (isIntersecting && !countingDone.current) {
      setTimeout(() => {
        animationFrameId = requestAnimationFrame(countUp)
      }, delay)
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isIntersecting, end, duration, delay])

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
