import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { whatsappLink } from '@/lib/site'

type Variant = 'red' | 'navy' | 'yellow' | 'outline' | 'white'

const variants: Record<Variant, string> = {
  red: 'bg-brand-red text-white hover:bg-[#a50d26] shadow-md shadow-brand-red/20',
  navy: 'bg-brand-navy text-white hover:bg-[#1b3654]',
  yellow: 'bg-brand-yellow text-brand-navy hover:bg-[#ffbf00]',
  white: 'bg-white text-brand-navy hover:bg-brand-cream',
  outline:
    'border-2 border-brand-navy text-brand-navy bg-transparent hover:bg-brand-navy hover:text-white',
}

const sizes = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base',
} as const

export function CtaButton({
  children,
  href,
  message,
  variant = 'red',
  size = 'md',
  className,
}: {
  children: ReactNode
  /** Internal anchor link, e.g. "#cursos". If omitted, builds a WhatsApp link. */
  href?: string
  /** WhatsApp message (used when href is not provided). */
  message?: string
  variant?: Variant
  size?: keyof typeof sizes
  className?: string
}) {
  const isExternal = !href
  const target = href ?? whatsappLink(message)
  return (
    <a
      href={target}
      {...(isExternal
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2',
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </a>
  )
}
