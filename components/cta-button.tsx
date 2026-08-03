import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { whatsappLink } from '@/lib/site'

type Variant = 'pink' | 'red' | 'navy' | 'yellow' | 'outline' | 'white'

const variants: Record<Variant, string> = {
  pink: 'bg-brand-pink text-white hover:bg-brand-pink-hover shadow-lg shadow-brand-pink/35 ring-2 ring-brand-pink/30',
  red: 'bg-brand-pink text-white hover:bg-brand-pink-hover shadow-lg shadow-brand-pink/30',
  navy: 'bg-brand-blue-dark text-white hover:bg-brand-blue shadow-md',
  yellow: 'bg-brand-yellow text-brand-blue-dark hover:bg-[#e6b800] shadow-md font-extrabold',
  white: 'bg-white text-brand-blue hover:bg-brand-gray shadow-md font-extrabold',
  outline:
    'border-2 border-white/80 text-white bg-transparent hover:bg-white hover:text-brand-blue font-bold',
}

const sizes = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base sm:text-lg',
} as const

export function CtaButton({
  children,
  href,
  message,
  variant = 'pink',
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
        'group inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.97] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2',
        '[&_svg]:transition-all [&_svg]:duration-300 group-hover:[&_svg]:translate-x-1 group-hover:[&_svg]:scale-110',
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </a>
  )
}
