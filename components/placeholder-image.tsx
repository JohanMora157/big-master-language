import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const themes = {
  yellow: 'from-brand-yellow to-[#ffbf00] text-brand-navy',
  red: 'from-brand-red to-[#9c0c23] text-white',
  navy: 'from-brand-navy to-[#1b3654] text-white',
  cream: 'from-brand-cream to-[#ffe9a8] text-brand-navy',
} as const

export function PlaceholderImage({
  label,
  icon: Icon,
  theme = 'yellow',
  className,
  tag,
  src,
}: {
  label: string
  icon: LucideIcon
  theme?: keyof typeof themes
  className?: string
  tag?: string
  src?: string
}) {
  return (
    <div
      className={cn(
        'group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl shadow-md p-6 text-center min-h-[140px]',
        src ? 'bg-brand-navy text-white' : cn('bg-gradient-to-br', themes[theme]),
        className,
      )}
      role="img"
      aria-label={label}
    >
      {src ? (
        <>
          {/* Background image */}
          <img
            src={src}
            alt={label}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          {/* Dark gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/55 to-brand-navy/35 z-[1]" />
        </>
      ) : (
        <div className="absolute inset-0 brand-texture opacity-40" aria-hidden />
      )}

      {tag ? (
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-navy shadow-sm z-10">
          {tag}
        </span>
      ) : null}

      <span className="relative mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30 z-10 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-6 w-6 text-white" strokeWidth={2.2} />
      </span>

      <span className="relative text-sm font-bold leading-snug text-balance z-10 text-white">
        {label}
      </span>
    </div>
  )
}
