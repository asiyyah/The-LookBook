'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 text-center">
      <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted mb-4">
        Error
      </p>
      <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
        Something went wrong
      </h1>
      <p className="text-muted text-lg max-w-md leading-relaxed mb-10">
        An unexpected error occurred. Please try again or return home.
      </p>
      <div className="flex gap-6">
        <button
          onClick={() => unstable_retry()}
          className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase border-b border-foreground pb-1 hover:gap-4 transition-all duration-300"
        >
          Try Again
          <span className="text-lg">&rarr;</span>
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-muted border-b border-muted pb-1 hover:gap-4 transition-all duration-300"
        >
          Go Home
          <span className="text-lg">&rarr;</span>
        </Link>
      </div>
    </div>
  )
}
