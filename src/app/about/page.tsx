import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the creator behind The Lookbook — a designer and creative director with a passion for brand identity, editorial design, and digital products.",
  openGraph: {
    title: "About — The Lookbook",
    description:
      "Learn about the creator behind The Lookbook — a designer and creative director with a passion for brand identity, editorial design, and digital products.",
  },
};

const skills = [
  "Brand Identity",
  "UI Design",
  "Art Direction",
  "Typography",
  "Photography",
  "Motion Design",
];

const experience = [
  {
    year: "2023 — Present",
    title: "Creative Director",
    company: "Studio Collective",
    description:
      "Leading design strategy and creative direction for a multidisciplinary studio working with global brands.",
  },
  {
    year: "2020 — 2023",
    title: "Senior Designer",
    company: "Form & Function",
    description:
      "Designed digital products and brand identities for startups and established companies across Europe.",
  },
  {
    year: "2017 — 2020",
    title: "Designer",
    company: "Matter Studio",
    description:
      "Crafted editorial layouts, branding systems, and visual identities for cultural and commercial clients.",
  },
  {
    year: "2015 — 2017",
    title: "Junior Designer",
    company: "Base Design",
    description:
      "Developed skills in typography, print production, and visual storytelling across a range of projects.",
  },
];

export default function About() {
  return (
    <>
      <section className="pt-48 pb-32 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted mb-4">
            About
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none max-w-4xl">
            Creating meaning
            <br />
            through design
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20">
            <div className="space-y-8 text-lg leading-relaxed text-muted">
              <p>
                I believe design is not about decoration — it is about
                communication. Every project I take on starts with a simple
                question: what story needs to be told?
              </p>
              <p>
                With over a decade of experience working across brand identity,
                editorial design, and digital products, I have had the privilege
                of collaborating with startups, cultural institutions, and
                global brands to create work that resonates.
              </p>
              <p>
                My approach is rooted in craft, curiosity, and collaboration. I
                believe the best work comes from deep listening, rigorous
                thinking, and the courage to pursue ideas that feel both true
                and surprising.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-foreground text-background">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/50 mb-4">
            Skills &amp; Expertise
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-16">
            What I do
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {skills.map((skill) => (
              <div key={skill} className="group">
                <p className="text-sm font-medium tracking-widest uppercase text-white/70 group-hover:text-background transition-colors duration-300">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted mb-4">
            Experience
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-16">
            Career timeline
          </h2>
          <div className="max-w-3xl">
            {experience.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 pb-16 last:pb-0 border-l border-border"
              >
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-foreground" />
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted">
                  {item.year}
                </p>
                <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                <p className="text-sm font-medium text-muted mt-1">
                  {item.company}
                </p>
                <p className="text-muted mt-3 leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-foreground text-background">
        <div className="max-w-screen-2xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/50 mb-4">
            Collaboration
          </p>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight max-w-3xl mx-auto leading-none">
            Let&apos;s work
            <br />
            together
          </h2>
          <p className="text-lg sm:text-xl text-white/70 mt-8 max-w-lg mx-auto leading-relaxed">
            Have a project in mind? I would love to hear about it. Reach out and
            let&apos;s create something meaningful.
          </p>
          <div className="mt-10">
            <a
              href="mailto:hello@thelookbook.com"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-background border-b border-background pb-1 hover:gap-4 transition-all duration-300"
            >
              Get in Touch
              <span className="text-lg">&rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
