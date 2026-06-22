import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedProjects } from '@/lib/projects'

export default function FeaturedProjects() {
  const projects = getFeaturedProjects()

  return (
    <section className="py-32 px-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted mb-4">
              Selected Work
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Featured projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase border-b border-foreground pb-1 hover:gap-4 transition-all duration-300"
          >
            All Projects
            <span className="text-lg">&rarr;</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className={`group relative block overflow-hidden ${
                index === 0
                  ? 'md:col-span-2 md:row-span-2'
                  : ''
              }`}
            >
              <div className="relative w-full h-[400px] md:h-full min-h-[400px] overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/70">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/70 mt-2 max-w-md leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center sm:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase border-b border-foreground pb-1 hover:gap-4 transition-all duration-300"
          >
            All Projects
            <span className="text-lg">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
