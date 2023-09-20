import { data } from '@/lib/database'
import Showcase from '@/components/(dashboard)/Showcase'

export default function HeroSections() {
  const sections = data.map((a) => a.items).flat()

  const heroSections = sections.find(
    (a) => a.slug === 'hero-sections'
  )

  return (
    <Showcase
      name='Hero Sections'
      sections={heroSections?.components ?? []}
    />
  )
}
