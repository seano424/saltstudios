import { heroSections } from '@/lib/database'
import Showcase from '@/components/(dashboard)/Showcase'

export default function HeroSections() {
  return (
    <Showcase
      name='Hero Sections'
      sections={heroSections}
    />
  )
}
