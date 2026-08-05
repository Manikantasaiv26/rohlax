import { motion } from 'framer-motion'

const pillars = [
  {
    title: 'Right people',
    body: 'We match specialists to the work — not résumés to open seats.',
  },
  {
    title: 'Right technology',
    body: 'Delivery stays sharp when talent, stack, and process actually fit.',
  },
  {
    title: 'Real outcomes',
    body: 'From staffing through build and advisory, we measure what ships.',
  },
]

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-navy text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 90% 20%, rgba(26,111,232,0.45), transparent 55%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:px-8 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-display text-sm font-semibold tracking-[0.18em] text-blue-bright uppercase">
            About ROHLAX
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            A partner for staffing, development, and consulting that stays close to delivery.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            ROHLAX Tech Solutions (RTSPL) connects enterprises with high-impact IT talent and
            execution. Whether you need to scale a team, ship a product, or strengthen how you
            build — we keep people, process, and technology aligned.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 self-center">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="border-l-2 border-blue-bright/70 pl-5"
            >
              <h3 className="font-display text-lg font-bold">{pillar.title}</h3>
              <p className="mt-1.5 text-white/75">{pillar.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
