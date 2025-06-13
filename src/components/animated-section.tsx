"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
  threshold = 0.1,
  rootMargin = "-50px",
  triggerOnce = true,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold, rootMargin, triggerOnce })

  // Define the initial and animated styles based on the direction
  let initialStyles = {}
  switch (direction) {
    case "up":
      initialStyles = { opacity: 0, transform: "translateY(30px)" }
      break
    case "down":
      initialStyles = { opacity: 0, transform: "translateY(-30px)" }
      break
    case "left":
      initialStyles = { opacity: 0, transform: "translateX(30px)" }
      break
    case "right":
      initialStyles = { opacity: 0, transform: "translateX(-30px)" }
      break
    case "none":
      initialStyles = { opacity: 0 }
      break
  }

  const animatedStyles = {
    opacity: 1,
    transform: "translate(0, 0)",
  }

  const styles = isVisible ? animatedStyles : initialStyles

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...styles,
        transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
