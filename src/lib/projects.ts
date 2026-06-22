import { Project } from '@/types/project'
import { getImagesForCategory } from './imageMap'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'solaris',
    title: 'Solaris',
    category: 'Brand',
    imageQuery: 'luxury brand identity packaging',
    description:
      'A visual identity system for a luxury wellness retreat blending light, space, and serenity.',
    year: '2025',
    tools: ['Figma', 'Illustrator', 'After Effects', 'Photoshop'],
    coverImage: getImagesForCategory('Brand').cover,
    gallery: getImagesForCategory('Brand').gallery,
    featured: true,
    intro:
      'A comprehensive brand identity developed for Solaris, a high-end wellness retreat nestled in the coastal mountains.',
    challenge:
      'The client needed an identity that communicated luxury without feeling cold, and serenity without being generic. The challenge was to create a system that felt both premium and approachable.',
    process:
      'Starting with extensive moodboarding and competitive analysis, we explored the relationship between natural light and spatial design. The resulting palette draws from dawn and dusk tones, with a custom typographic system inspired by modernist signage.',
    outcome:
      'The final identity includes a flexible logo system, bespoke typography, packaging design, digital presence, and environmental signage. The brand launched to critical acclaim in the hospitality design press.',
  },
  {
    id: '2',
    slug: 'cipher',
    title: 'Cipher',
    category: 'Mobile',
    imageQuery: 'mobile app UI design interface',
    description:
      'A privacy-first messaging app designed for secure, intuitive communication.',
    year: '2025',
    tools: ['Figma', 'Swift', 'Kotlin', 'Principle'],
    coverImage: getImagesForCategory('Mobile').cover,
    gallery: getImagesForCategory('Mobile').gallery,
    featured: true,
    intro:
      'An end-to-end encrypted messaging platform that prioritises user experience without compromising security.',
    challenge:
      'Balancing military-grade encryption with a frictionless user experience. Most secure messaging apps feel technical and intimidating. Cipher needed to feel as natural as any messaging app while being fundamentally more private.',
    process:
      "We designed around core principles: zero knowledge, ephemeral interactions, and intuitive gestures. Every screen was prototyped and tested for both security clarity and ease of use. The visual language uses dark tones with subtle cryptographic motifs.",
    outcome:
      'Cipher achieved a 4.8 star rating across app stores, with users praising its balance of security and usability. The app was featured in privacy and design publications globally.',
  },
  {
    id: '3',
    slug: 'luminara',
    title: 'Luminara',
    category: 'Web',
    imageQuery: 'editorial website design magazine',
    description:
      'An immersive editorial platform for a contemporary art and culture magazine.',
    year: '2024',
    tools: ['Next.js', 'TypeScript', 'Figma', 'Framer Motion'],
    coverImage: getImagesForCategory('Web').cover,
    gallery: getImagesForCategory('Web').gallery,
    featured: true,
    intro:
      'A digital home for Luminara magazine — featuring curated content on contemporary art, design, and culture.',
    challenge:
      'Translating the tactile experience of a print magazine into a digital environment without losing editorial warmth. The design needed to feel curated, typographically rich, and effortlessly navigable.',
    process:
      'We studied classic editorial layouts from magazine golden ages and reimagined them for screen. Generous typography, full-bleed imagery, and a restrained colour palette let the content lead. Interactions were designed to feel like turning pages.',
    outcome:
      'Luminara saw a 340% increase in digital readership within three months. The platform won an Awwwards Site of the Day and was featured in communication arts.',
  },
  {
    id: '4',
    slug: 'aethel',
    title: 'Aethel',
    category: 'Print',
    imageQuery: 'editorial book design typography',
    description:
      'A limited-edition art book exploring the intersection of Norse mythology and modern design.',
    year: '2024',
    tools: ['InDesign', 'Photoshop', 'Illustrator', 'Procreate'],
    coverImage: getImagesForCategory('Print').cover,
    gallery: getImagesForCategory('Print').gallery,
    featured: false,
    intro:
      'A meticulously crafted art book that reimagines ancient Norse mythology through a contemporary design lens.',
    challenge:
      'Creating a physical object that felt both ancient and modern. The book needed to honour its mythological source material while feeling relevant to contemporary design audiences.',
    process:
      'Each spread was composed as a dialogue between old and new — runic textures paired with minimalist grids, vellum interleaves with bold typography. The binding and paper stock were selected to evoke craftsmanship.',
    outcome:
      'The first print run of 500 copies sold out in 48 hours. Aethel was shortlisted for the British Book Design Awards and acquired by the V&A Museum permanent collection.',
  },
  {
    id: '5',
    slug: 'nexus',
    title: 'Nexus',
    category: 'Brand',
    imageQuery: 'architecture brand identity modern',
    description:
      'Brand strategy and visual identity for a future-forward architecture firm.',
    year: '2024',
    tools: ['Figma', 'Illustrator', 'Cinema 4D', 'After Effects'],
    coverImage: getImagesForCategory('Brand').cover,
    gallery: getImagesForCategory('Brand').gallery,
    featured: false,
    intro:
      'A bold brand identity for Nexus Architecture — a practice known for parametric design and sustainable innovation.',
    challenge:
      "The identity needed to communicate technical precision and creative vision in equal measure. It had to appeal to both institutional clients and avant-garde collaborators.",
    process:
      "We built a visual system around geometric modularity, inspired by the firm's own architectural language. A custom logomark adapts across contexts, while a restrained palette of concrete, copper, and midnight establishes a serious, sophisticated tone.",
    outcome:
      "Nexus credited the rebrand with securing three major institutional contracts within six months. The identity was featured in Brand New and It's Nice That.",
  },
  {
    id: '6',
    slug: 'verdant',
    title: 'Verdant',
    category: 'Web',
    imageQuery: 'nature web platform design',
    description:
      'A plant identification and care platform blending technology with botanical beauty.',
    year: '2023',
    tools: ['React', 'Node.js', 'Figma', 'TensorFlow'],
    coverImage: getImagesForCategory('Web').cover,
    gallery: getImagesForCategory('Web').gallery,
    featured: false,
    intro:
      'A digital platform that uses AI to help people identify and care for plants, making botany accessible to everyone.',
    challenge:
      'Making a technology-driven product feel warm, organic, and human. Most plant apps lean heavily into either utilitarian design or saccharine aesthetics. Verdant needed to feel like a calm, knowledgeable companion.',
    process:
      'We drew inspiration from botanical gardens, herbariums, and field journals. The interface uses earthy tones, organic shapes, and generous whitespace. The AI features were designed to feel like gentle guidance rather than cold automation.',
    outcome:
      'Verdant grew to 200,000 users in its first year and was acquired by a major horticulture company. It holds a 4.7 star rating on both major app stores.',
  },
  {
    id: '7',
    slug: 'noir',
    title: 'Noir',
    category: 'Mobile',
    imageQuery: 'photography mobile app dark mode',
    description:
      'A curated dark-mode photography platform for emerging visual artists.',
    year: '2023',
    tools: ['Figma', 'Swift', 'Core ML', 'Sketch'],
    coverImage: getImagesForCategory('Mobile').cover,
    gallery: getImagesForCategory('Mobile').gallery,
    featured: false,
    intro:
      'A photography platform designed entirely in dark mode, putting visual content at the absolute centre of the experience.',
    challenge:
      'Most photography platforms compete for attention with cluttered interfaces and bright UI elements. Noir needed to disappear — becoming invisible so the photography could speak.',
    process:
      'Every design decision was made in service of the images. Dark backgrounds with subtle depth, gesture-based navigation, and zero visual noise. The UI uses micro-interactions that feel tactile and responsive without being distracting.',
    outcome:
      'Noir was named App of the Day in 14 countries. It built a community of over 50,000 photographers in its first six months and was praised for its respectful, minimal approach to content presentation.',
  },
  {
    id: '8',
    slug: 'prism',
    title: 'Prism',
    category: 'Print',
    imageQuery: 'typographic poster screenprint design',
    description:
      'An experimental typographic poster series exploring colour theory and optical illusion.',
    year: '2023',
    tools: ['Illustrator', 'Photoshop', 'Screen Printing', 'Processing'],
    coverImage: getImagesForCategory('Print').cover,
    gallery: getImagesForCategory('Print').gallery,
    featured: false,
    intro:
      'A series of eight screen-printed posters that investigate the visual tension between colour theory and typographic form.',
    challenge:
      'Creating optical effects through pure print technique — no digital trickery. Each poster needed to work as both a standalone piece and part of a cohesive series.',
    process:
      'We developed a generative system in Processing to explore colour-space relationships, then translated selected outputs into screen-printed posters. Each layer was hand-mixed and printed on a vintage Heidelberg press.',
    outcome:
      'The series was exhibited at Design Manchester and featured in Print Magazine. A limited run of 100 numbered sets sold out within a week of release.',
  },
]

export function getProjects(): Project[] {
  return projects
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getProjectCategories(): string[] {
  return ['All', ...new Set(projects.map((p) => p.category))]
}
