import Link from "next/link";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <section className="py-32 px-8 border-t border-border">
        <div className="max-w-screen-2xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted mb-4">
              About
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Seeing the
              <br />
              unseen
            </h2>
            <p className="text-lg sm:text-xl text-muted mt-8 leading-relaxed tracking-wide max-w-xl">
              Every photograph is a negotiation between light and shadow,
              intention and instinct. With over a decade behind the lens,
              I work across portraiture, fashion editorial, and documentary
              street photography — each series a new conversation with the
              world as I find it.
            </p>
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.25em] uppercase border-b border-foreground pb-1 hover:gap-4 transition-all duration-300"
              >
                Read More
                <span className="text-lg">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
