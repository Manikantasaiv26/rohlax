export function LogoMark({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="30" fill="#F4F7FB" stroke="#002B5B" strokeWidth="2" />
      <path
        d="M32 8c-2.2 0-3.2 1.6-3.2 1.6L26.5 12H22l-1.8 3.2L16.5 14l-2.8 2.8 1.2 3.7L12 22v4.5l3 1.8-1.2 3.7L16.5 34l3.7-1.2L22 36.5h4.5l1.8 3 3.2-1.3S28.8 40 32 40V8z"
        fill="#002B5B"
      />
      <path
        d="M36 14.5a18 18 0 0 1 13.5 13.2"
        stroke="#1A6FE8"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <circle cx="49.5" cy="27.7" r="2.4" fill="#1A6FE8" />
      <path
        d="M36 20.5a12 12 0 0 1 9.2 9"
        stroke="#1A6FE8"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <circle cx="45.2" cy="29.5" r="2.4" fill="#1A6FE8" />
      <circle cx="32" cy="32" r="4.2" fill="#002B5B" />
      <path
        d="M32 24v16M24 32h16"
        stroke="#002B5B"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Logo({
  compact = false,
  light = false,
}: {
  compact?: boolean
  light?: boolean
}) {
  return (
    <a href="#home" className="flex items-center gap-3 group" aria-label="ROHLAX home">
      <LogoMark className="w-11 h-11 shrink-0 transition-transform duration-300 group-hover:scale-[1.03]" />
      <span className="leading-tight">
        <span
          className={`block font-display font-bold tracking-[0.08em] text-[1.15rem] ${
            light ? 'text-white' : 'text-navy'
          }`}
        >
          ROHLAX
        </span>
        {!compact && (
          <span
            className={`block text-[0.62rem] font-semibold tracking-[0.18em] uppercase ${
              light ? 'text-blue-bright/90' : 'text-blue'
            }`}
          >
            Staffing · Development · Consulting
          </span>
        )}
      </span>
    </a>
  )
}
