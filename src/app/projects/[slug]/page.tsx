import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getProjects } from "@/lib/projects";
import ProjectImageSection from "@/components/ProjectImageSection";

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
    return { title: "Series Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — The Lookbook`,
      description: project.description,
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
      <ProjectImageSection project={project} />

      <section className="py-32 px-8 border-t border-border">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted mb-6">
                The Concept
              </p>
              <p className="text-lg leading-relaxed text-muted tracking-wide">
                {project.concept}
              </p>
            </div>
            <div className="space-y-16">
              <div>
                <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted mb-6">
                  Lighting Approach
                </p>
                <p className="text-base leading-relaxed text-muted tracking-wide">
                  {project.lighting}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted mb-6">
                  Creative Intent
                </p>
                <p className="text-base leading-relaxed text-muted tracking-wide">
                  {project.intent}
                </p>
              </div>
            </div>
          </div>
          {project.equipment && (
            <div className="mt-24 pt-16 border-t border-border">
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted mb-6">
                Equipment
              </p>
              <div className="flex flex-wrap gap-x-12 gap-y-3">
                {project.equipment.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-muted tracking-wide"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-8 border-t border-border">
        <div className="max-w-screen-2xl mx-auto flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.25em] uppercase border-b border-foreground pb-1 hover:gap-4 transition-all duration-300"
          >
            <span className="text-lg">&larr;</span>
            All Series
          </Link>
        </div>
      </section>
    </>
  );
}
