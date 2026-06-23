import Link from 'next/link'

const socialLinks = [
  { href: '#', label: 'Instagram' },
  { href: '#', label: 'X' },
  { href: '#', label: 'Behance' },
  { href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-screen-2xl mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
            <Link
              href="/"
              className="text-sm font-medium tracking-[0.25em] uppercase"
            >
              The Lookbook
            </Link>
            <p className="text-muted text-sm mt-3 max-w-xs leading-relaxed">
              A curated archive of photographic series and visual studies.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex gap-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-foreground/50 hover:text-foreground transition-colors duration-300 tracking-wider uppercase"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-xs text-muted">
              &copy; {new Date().getFullYear()} The Lookbook. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
