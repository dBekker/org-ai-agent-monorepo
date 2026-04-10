export interface HeroSectionDto {
  title?: string
  description?: string
  ctaLabel?: string
}

export interface HeroSectionProps {
  title: string
  description: string
  ctaLabel: string
}

export function mapHeroSection(input: HeroSectionDto): HeroSectionProps {
  return {
    title: input.title ?? 'Untitled page',
    description: input.description ?? '',
    ctaLabel: input.ctaLabel ?? 'Learn more',
  }
}
