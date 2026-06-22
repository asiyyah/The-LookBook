export interface Project {
  id: string
  slug: string
  title: string
  category: 'Web' | 'Mobile' | 'Print' | 'Brand'
  imageQuery: string
  description: string
  year: string
  tools: string[]
  coverImage: string
  gallery: string[]
  featured: boolean
  intro: string
  challenge: string
  process: string
  outcome: string
}
