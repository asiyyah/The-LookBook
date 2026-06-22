import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
  size?: 'default' | 'large'
}

export default function ProjectCard({ project, size = 'default' }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group block relative overflow-hidden ${size === 'large' ? 'col-span-2 row-span-2' : ''}`}
    >
      <div className="relative w-full h-full min-h-[400px] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
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
  )
}
