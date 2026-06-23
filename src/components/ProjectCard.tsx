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
      className={`group block relative overflow-hidden ${size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      <div className="relative w-full h-full min-h-[420px] overflow-hidden bg-neutral-900">
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
}
