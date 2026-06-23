import Link from 'next/link'
import { heroImage } from '@/lib/imageMap'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundColor: '#1a1a1a',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
      <div className="relative z-10 flex flex-col justify-end h-full max-w-screen-2xl mx-auto px-8 pb-28">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/50 mb-4">
          Photographer &amp; Visual Storyteller
        </p>
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-white leading-none max-w-4xl">
          Light
          <br />
          <span className="italic font-light">through</span>
          <br />
          the lens
        </h1>
        <p className="text-base sm:text-lg text-white/60 mt-6 max-w-lg leading-relaxed tracking-wide">
          Capturing the quiet tension between shadow and illumination — 
          portraits, streets, and stories told in silver and grain.
        </p>
        <div className="mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.25em] uppercase text-white border-b border-white/40 pb-1 hover:border-white/80 hover:gap-4 transition-all duration-500"
          >
            View Series
            <span className="text-lg">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
