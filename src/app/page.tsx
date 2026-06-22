import Link from "next/link";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <section className="py-32 px-8 bg-foreground text-background">
        <div className="max-w-screen-2xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/50 mb-4">
              About
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Design that
              <br />
              tells a story
            </h2>
            <p className="text-lg sm:text-xl text-white/70 mt-8 leading-relaxed max-w-xl">
              With over a decade of experience across brand identity, digital
              design, and art direction, I help creators and companies bring
              their vision to life through thoughtful, intentional design.
            </p>
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-background border-b border-background pb-1 hover:gap-4 transition-all duration-300"
              >
                Learn More
                <span className="text-lg">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
