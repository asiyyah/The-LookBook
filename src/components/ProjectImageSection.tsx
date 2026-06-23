import Image from 'next/image'
import { Project } from '@/types/project'

interface ProjectImageSectionProps {
  project: Project
}

export default function ProjectImageSection({ project }: ProjectImageSectionProps) {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden bg-neutral-900">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
        <div className="absolute bottom-0 left-0 right-0 max-w-screen-2xl mx-auto px-8 pb-28">
          <div className="flex items-center gap-4 text-xs font-medium tracking-[0.25em] uppercase text-white/50 mb-4">
            <span>{project.category}</span>
            <span className="w-px h-3 bg-white/20" />
            <span>{project.year}</span>
            {project.location && (
              <>
                <span className="w-px h-3 bg-white/20" />
                <span>{project.location}</span>
              </>
            )}
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none max-w-4xl">
            {project.title}
          </h1>
        </div>
      </section>

      {project.gallery.length > 0 && (
        <section className="py-32 px-8">
          <div className="max-w-screen-2xl mx-auto">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted mb-4">
              Gallery
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-16">
              Selected frames
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-border">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden bg-background ${
                    index === 0 ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className="relative w-full h-[550px] md:h-[650px]">
                    <Image
                      src={image}
                      alt={`${project.title} — frame ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
