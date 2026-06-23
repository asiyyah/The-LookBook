import type { Metadata } from "next";
import { getProjects, getProjectCategories } from "@/lib/projects";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore a curated collection of photographic series — portraits, fashion editorials, street photography, and fine art studies.",
  openGraph: {
    title: "Projects — The Lookbook",
    description:
      "Explore a curated collection of photographic series — portraits, fashion editorials, street photography, and fine art studies.",
  },
};

export default function Projects() {
  const projects = getProjects();
  const categories = getProjectCategories();

  return (
    <>
      <section className="pt-48 pb-16 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted mb-4">
            Archive
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none max-w-4xl">
            Photographic
            <br />
            <span className="italic font-light">series</span>
          </h1>
        </div>
      </section>
      <ProjectGrid projects={projects} categories={categories} />
    </>
  );
}
