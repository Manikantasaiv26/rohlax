export function LogoMark({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="31" fill="#F4F7FB" />
      <circle cx="32" cy="32" r="30.25" stroke="#002B5B" strokeWidth="1.5" />

      {/* Left gear half */}
      <path
        fill="#002B5B"
        d="M32 10c-1.6 0-2.6 1.15-2.6 1.15L27.5 14.2H23l-2.05 3.55-4.15-1.3-3.15 3.15 1.3 4.15L11.4 26.8v4.5l2.95 1.7c0 0 1.15 1 1.15 2.6H32V10z"
      />
      {/* Gear teeth accents on left rim */}
      <path
        fill="#002B5B"
        d="M18.2 13.8l-2.1-1.4-1.6 2.4 2.3 1.2 1.4-2.2zm-6.4 8.6l-2.5-.2-.2 2.6 2.5.4.2-2.8zm.2 9.4l-2.4 1 .9 2.5 2.3-1.2-.8-2.3z"
      />

      {/* Right arcs + nodes */}
      <path
        d="M36.2 15.5a18.8 18.8 0 0 1 13.8 13.6"
        stroke="#1A6FE8"
        strokeWidth="3.3"
        strokeLinecap="round"
      />
      <circle cx="50" cy="29.1" r="2.5" fill="#1A6FE8" />
      <path
        d="M36.2 21.2a12.6 12.6 0 0 1 9.5 9.3"
        stroke="#1A6FE8"
        strokeWidth="3.3"
        strokeLinecap="round"
      />
      <circle cx="45.7" cy="30.5" r="2.5" fill="#1A6FE8" />

      {/* Center crosshair / target */}
      <circle cx="32" cy="32" r="4.4" fill="#002B5B" />
      <path
        d="M32 24v16M24 32h16"
        stroke="#002B5B"
        strokeWidth="1.65"
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
