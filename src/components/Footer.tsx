import { Logo } from './Logo'

const footerLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <Logo compact />
          <p className="mt-3 max-w-sm text-sm text-muted">
            ROHLAX Tech Solutions (RTSPL) — staffing, development, and consulting for technology
            teams that need to move.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm font-medium text-muted transition hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {year} ROHLAX Tech Solutions. All rights reserved.</p>
          <p className="tracking-wide uppercase">Staffing · Development · Consulting</p>
        </div>
      </div>
    </footer>
  )
}
