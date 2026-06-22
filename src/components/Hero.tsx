import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1920&q=80&fm=jpg&fit=crop)',
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col justify-end h-full max-w-screen-2xl mx-auto px-8 pb-24">
        <p className="text-sm font-medium tracking-[0.3em] uppercase text-white/70 mb-4">
          Designer &amp; Creative Director
        </p>
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-white leading-none max-w-4xl">
          Crafting
          <br />
          visual stories
        </h1>
        <p className="text-lg sm:text-xl text-white/70 mt-6 max-w-xl leading-relaxed">
          I design immersive brand experiences, editorial platforms, and
          digital products that feel intentional.
        </p>
        <div className="mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-white border-b border-white pb-1 hover:gap-4 transition-all duration-300"
          >
            View Projects
            <span className="text-lg">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
