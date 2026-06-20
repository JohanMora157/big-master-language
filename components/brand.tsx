import Image from 'next/image'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  size = 44,
}: {
  className?: string
  size?: number
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-3 select-none',
        className,
      )}
    >
      <Image
        src="/images/logo.jpg"
        alt="Big Master Language Center"
        width={size}
        height={size}
        className="rounded-xl ring-2 ring-brand-navy/10 shadow-sm"
        priority
      />
      <span className="flex flex-col leading-none">
        <span className="font-heading text-lg text-brand-red tracking-wide">
          BIG MASTER
        </span>
        <span className="text-[10px] font-semibold tracking-[0.22em] text-brand-navy">
          LANGUAGE CENTER
        </span>
      </span>
    </span>
  )
}

/** Decorative Big Ben tower silhouette. Decorative only. */
export function BigBen({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 260"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <rect x="32" y="120" width="16" height="130" fill="currentColor" />
      <rect x="28" y="92" width="24" height="34" rx="2" fill="currentColor" />
      <circle cx="40" cy="108" r="7" className="fill-brand-yellow" />
      <rect x="26" y="84" width="28" height="10" rx="2" fill="currentColor" />
      <path d="M40 40 L54 86 H26 Z" fill="currentColor" />
      <rect x="38" y="20" width="4" height="22" fill="currentColor" />
      <circle cx="40" cy="16" r="5" fill="currentColor" />
    </svg>
  )
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l.5-3H13v-2c0-.6.4-1 1-1z" />
    </svg>
  )
}

export function Sticker({
  children,
  variant = 'red',
  className,
}: {
  children: ReactNode
  variant?: 'red' | 'yellow' | 'navy' | 'cream'
  className?: string
}) {
  const styles = {
    red: 'bg-brand-red text-white',
    yellow: 'bg-brand-yellow text-brand-navy',
    navy: 'bg-brand-navy text-white',
    cream: 'bg-brand-cream text-brand-navy',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide shadow-sm',
        styles[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  inverted = false,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  inverted?: boolean
}) {
  const renderTitle = () => {
    const parts = title.split(/(\{.*?\})/g)
    return parts.map((part, index) => {
      if (part.startsWith('{') && part.endsWith('}')) {
        const text = part.slice(1, -1)
        return (
          <span
            key={index}
            className={inverted ? 'text-brand-yellow' : 'text-brand-red'}
          >
            {text}
          </span>
        )
      }
      return part
    })
  }

  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            'inline-block mb-3 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]',
            inverted
              ? 'bg-brand-yellow text-brand-navy'
              : 'bg-brand-red/10 text-brand-red',
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          'font-heading text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-balance',
          inverted ? 'text-white' : 'text-brand-navy',
        )}
      >
        {renderTitle()}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg leading-relaxed text-pretty font-medium',
            inverted ? 'text-white/90' : 'text-slate-700 dark:text-slate-300',
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
