import {
  GraduationCap,
  Languages,
  MessagesSquare,
  Mic,
  Sun,
  Baby,
  Backpack,
  Briefcase,
  Award,
  BookOpen,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading, InstagramIcon } from '@/components/brand'
import { PlaceholderImage } from '@/components/placeholder-image'
import { CtaButton } from '@/components/cta-button'
import { SITE } from '@/lib/site'
import { ScrollReveal } from '@/components/scroll-reveal'

type Theme = 'yellow' | 'red' | 'navy' | 'cream'

const items: {
  label: string
  icon: LucideIcon
  theme: Theme
  tag: string
  span?: string
  src: string
}[] = [
  {
    label: 'Clase de inglés en Bogotá',
    icon: GraduationCap,
    theme: 'navy',
    tag: 'Clases',
    span: 'sm:col-span-2 sm:row-span-2',
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
  },
  {
    label: 'Clase de francés',
    icon: Languages,
    theme: 'red',
    tag: 'Idiomas',
    src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600&auto=format&fit=crop',
  },
  {
    label: 'Clase de alemán',
    icon: MessagesSquare,
    theme: 'yellow',
    tag: 'Idiomas',
    src: 'https://images.unsplash.com/photo-1527891751199-7225231a68dd?q=80&w=600&auto=format&fit=crop',
  },
  {
    label: 'Stand-up comedy en inglés',
    icon: Mic,
    theme: 'red',
    tag: 'Eventos',
    span: 'sm:col-span-2',
    src: 'https://images.unsplash.com/photo-1585699324551-f6c309eed262?q=80&w=800&auto=format&fit=crop',
  },
  {
    label: 'Vacaciones bilingües',
    icon: Sun,
    theme: 'yellow',
    tag: 'Programas',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
  },
  {
    label: 'Programa para niños',
    icon: Baby,
    theme: 'cream',
    tag: 'Niños',
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop',
  },
  {
    label: 'Programa para jóvenes',
    icon: Backpack,
    theme: 'navy',
    tag: 'Jóvenes',
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop',
  },
  {
    label: 'Clase para adultos',
    icon: Briefcase,
    theme: 'red',
    tag: 'Adultos',
    src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop',
  },
  {
    label: 'Preparación de exámenes',
    icon: Award,
    theme: 'yellow',
    tag: 'Exámenes',
    src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop',
  },
  {
    label: 'Cuaderno y clase',
    icon: BookOpen,
    theme: 'navy',
    tag: 'Recursos',
    src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop',
  },
]

export function Gallery() {
  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <ScrollReveal animation="fade-up" delay={100}>
          <SectionHeading
            eyebrow="Galería"
            title="Así se vive {Big Master}"
            subtitle="Clases, actividades, promociones y experiencias para aprender idiomas de forma diferente."
          />
        </ScrollReveal>

        <div className="mt-10 grid auto-rows-[140px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {items.map((item, idx) => (
            <ScrollReveal
              key={item.label}
              animation="scale-up"
              delay={idx * 75}
              className={`h-full ${item.span ?? ''}`}
            >
              <PlaceholderImage
                label={item.label}
                icon={item.icon}
                theme={item.theme}
                tag={item.tag}
                src={item.src}
                className="h-full w-full"
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={400} className="mt-10 text-center">
          <CtaButton size="lg" variant="navy" href={SITE.instagramUrl}>
            <InstagramIcon className="h-5 w-5" />
            Síguenos en Instagram
          </CtaButton>
        </ScrollReveal>
      </div>
    </section>
  )
}
