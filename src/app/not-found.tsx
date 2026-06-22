import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 text-center">
      <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted mb-4">
        404
      </p>
      <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
        Page not found
      </h1>
      <p className="text-muted text-lg max-w-md leading-relaxed mb-10">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase border-b border-foreground pb-1 hover:gap-4 transition-all duration-300"
      >
        Back Home
        <span className="text-lg">&rarr;</span>
      </Link>
    </div>
  )
}
