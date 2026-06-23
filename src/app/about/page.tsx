import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "A photographer dedicated to capturing the quiet tension between light and shadow — from studio portraits to street documentary.",
  openGraph: {
    title: "About — The Lookbook",
    description:
      "A photographer dedicated to capturing the quiet tension between light and shadow — from studio portraits to street documentary.",
  },
};

const approach = [
  "Studio Portraiture",
  "Fashion Editorial",
  "Street Documentary",
  "Fine Art",
  "Architecture",
  "Still Life",
];

const gear = [
  "Hasselblad H6D",
  "Leica M10 Monochrom",
  "Phase One IQ4 150MP",
  "Fujifilm GFX 100S",
  "Canon EOS R5",
  "Nikon Z9",
  "Leica M6 (film)",
  "Various Zeiss, Schneider & Fujinon optics",
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
            Light through
            <br />
            <span className="italic font-light">the lens</span>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-20">
            <div className="space-y-8 text-lg leading-relaxed text-muted tracking-wide">
              <p>
                I have spent the last decade learning to see — not just with my eyes but with my
                entire body. Photography, for me, is not about the camera or the technical mastery
                of exposure. It is about presence: the willingness to wait, to be quiet, to let
                the world reveal itself on its own terms.
              </p>
              <p>
                My work exists at the intersection of portraiture, fashion editorial, and
                documentary street photography. I am drawn to contrast — light against shadow,
                stillness against motion, the constructed against the candid. Every series I
                produce is an attempt to hold a moment still long enough to understand it.
              </p>
              <p>
                I believe the most powerful images are not taken but received. The photographer&apos;s
                job is not to impose a vision but to remain open to what is already there, waiting
                to be seen. This philosophy guides every project I undertake, from commercial
                editorial work to personal documentary studies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 border-t border-border">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted mb-6">
                Approach
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10">
                How I work
              </h2>
              <div className="flex flex-wrap gap-x-10 gap-y-4">
                {approach.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-muted tracking-wide"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted mb-6">
                Equipment
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10">
                My tools
              </h2>
              <div className="flex flex-wrap gap-x-10 gap-y-4">
                {gear.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-muted tracking-wide"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 border-t border-border">
        <div className="max-w-screen-2xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted mb-4">
            Connect
          </p>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight max-w-3xl mx-auto leading-none">
            Let&apos;s create
            <br />
            <span className="italic font-light">together</span>
          </h2>
          <p className="text-base sm:text-lg text-muted mt-8 max-w-lg mx-auto leading-relaxed tracking-wide">
            Whether you have a project in mind or simply want to discuss the
            possibilities of light, I would love to hear from you.
          </p>
          <div className="mt-10">
            <a
              href="mailto:hello@thelookbook.com"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.25em] uppercase border-b border-foreground pb-1 hover:gap-4 transition-all duration-300"
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
