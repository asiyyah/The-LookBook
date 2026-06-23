'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/types/project'

interface ProjectGridProps {
  projects: Project[]
  categories: string[]
}

export default function ProjectGrid({ projects, categories }: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="flex-1 px-8 pb-32">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-wrap gap-8 mb-16 border-b border-border pb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-xs tracking-[0.25em] uppercase transition-colors duration-300 ${
                activeCategory === category
                  ? 'text-foreground'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-border">
          {filtered.map((project, index) => {
            const isLarge = index % 5 === 0

            return (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className={`group relative block overflow-hidden bg-background ${
                  isLarge ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className="relative w-full h-full min-h-[420px] overflow-hidden">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-700" />
                  <div className="absolute inset-0 flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-6 group-hover:translate-y-0">
                    <p className="text-xs font-medium tracking-[0.25em] uppercase text-white/60">
                      {project.category}
                    </p>
                    <h3 className="text-3xl font-bold text-white mt-2 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/60 mt-3 max-w-md leading-relaxed tracking-wide">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
