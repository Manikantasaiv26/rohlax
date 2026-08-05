import { motion } from 'framer-motion'
import { LogoMark } from './Logo'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-[4.5rem]">
      <div className="hero-glow relative min-h-[calc(100svh-4.5rem)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent)',
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:gap-10 md:px-8 md:py-20 lg:py-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mb-7 inline-flex items-center gap-3 rounded-xl bg-white px-3.5 py-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.18)]"
            >
              <LogoMark className="h-9 w-9" />
              <span className="leading-tight">
                <span className="block font-display text-sm font-bold tracking-[0.08em] text-navy">
                  ROHLAX
                </span>
                <span className="block text-[0.58rem] font-semibold tracking-[0.16em] text-blue uppercase">
                  Talent · Tech · Delivery
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[2.35rem] leading-[1.08] font-extrabold tracking-tight text-white text-balance sm:text-5xl lg:text-[3.35rem]"
            >
              Where talent flow meets technology impact.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-white/85"
            >
              ROHLAX helps organizations move the right people into the right technology work —
              so delivery stays sharp and outcomes stay real.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-display text-[0.95rem] font-semibold text-navy transition hover:bg-blue-soft"
              >
                Start a conversation
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-lg border border-white/45 px-5 py-3 font-display text-[0.95rem] font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Explore services
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto flex w-full max-w-md items-center justify-center md:max-w-none"
            aria-hidden="true"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-blue-bright/25 blur-2xl" />
            <div className="relative w-full rounded-[1.75rem] border border-white/25 bg-white/10 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-5">
              <div className="relative flex aspect-square flex-col items-center justify-center rounded-[1.35rem] bg-navy-deep px-6">
                <div className="absolute top-7 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-blue-bright/80" />
                <LogoMark className="h-28 w-28 sm:h-32 sm:w-32" />
                <p className="mt-6 font-display text-[0.72rem] font-semibold tracking-[0.28em] text-blue-bright uppercase">
                  Staffing · Tech · Impact
                </p>
                <div className="absolute bottom-7 left-1/2 h-px w-20 -translate-x-1/2 bg-white/15" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
