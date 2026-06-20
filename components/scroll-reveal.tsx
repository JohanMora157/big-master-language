'use client'

import { type ReactNode, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type AnimationType = 'fade-up' | 'fade-in' | 'scale-up' | 'slide-left' | 'slide-right'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  animation?: AnimationType
  duration?: number // in ms
  delay?: number // in ms
  threshold?: number // between 0 and 1
  once?: boolean
}

export function ScrollReveal({
  children,
  className,
  animation = 'fade-up',
  duration = 700,
  delay = 0,
  threshold = 0.05,
  once = true,
}: ScrollRevealProps) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsIntersecting(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsIntersecting(false)
        }
      },
      { threshold }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, once])

  const animations: Record<AnimationType, string> = {
    'fade-up': 'opacity-0 translate-y-8',
    'fade-in': 'opacity-0',
    'scale-up': 'opacity-0 scale-95',
    'slide-left': 'opacity-0 translate-x-8',
    'slide-right': 'opacity-0 -translate-x-8',
  }

  const activeStyles: Record<AnimationType, string> = {
    'fade-up': 'opacity-100 translate-y-0',
    'fade-in': 'opacity-100',
    'scale-up': 'opacity-100 scale-100',
    'slide-left': 'opacity-100 translate-x-0',
    'slide-right': 'opacity-100 translate-x-0',
  }

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-[cubic-bezier(0.25,1,0.5,1)]',
        isIntersecting ? activeStyles[animation] : animations[animation],
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
