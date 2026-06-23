export interface Project {
  id: string
  slug: string
  title: string
  category: string
  description: string
  year: string
  location?: string
  coverImage: string
  gallery: string[]
  featured: boolean
  concept: string
  lighting: string
  intent: string
  equipment?: string[]
}
