import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, getProjects } from "@/lib/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — The Lookbook`,
      description: project.description,
      images: [{ url: project.coverImage }],
    },
  };
}

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 z-10 max-w-screen-2xl mx-auto px-8 pb-24">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/70 mb-3">
            {project.category} &mdash; {project.year}
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none max-w-4xl">
            {project.title}
          </h1>
        </div>
      </section>

      <section className="py-32 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-4">
                Overview
              </p>
              <p className="text-lg leading-relaxed text-muted">
                {project.intro}
              </p>
              <div className="mt-12">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-4">
                  Tools Used
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-sm px-4 py-2 border border-border text-muted"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <div>
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-4">
                  The Challenge
                </p>
                <p className="text-base leading-relaxed text-muted">
                  {project.challenge}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-4">
                  The Process
                </p>
                <p className="text-base leading-relaxed text-muted">
                  {project.process}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-foreground text-background">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/50 mb-4">
            Gallery
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-16">
            Visual exploration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className="relative w-full h-[500px] md:h-[600px]">
                  <Image
                    src={image}
                    alt={`${project.title} gallery image ${index + 1}`}
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

      <section className="py-32 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-4">
              Outcome
            </p>
            <p className="text-lg leading-relaxed text-muted">
              {project.outcome}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 border-t border-border">
        <div className="max-w-screen-2xl mx-auto flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase border-b border-foreground pb-1 hover:gap-4 transition-all duration-300"
          >
            <span className="text-lg">&larr;</span>
            All Projects
          </Link>
        </div>
      </section>
    </>
  );
}
