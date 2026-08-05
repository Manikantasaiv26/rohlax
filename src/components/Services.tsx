import { motion } from 'framer-motion'

const services = [
  {
    id: 'staffing',
    title: 'IT Technical Staffing',
    eyebrow: 'Staffing',
    body: 'Scale project teams with vetted engineers, architects, and domain specialists matched to your stack, culture, and delivery pace.',
    points: ['Contract & contract-to-hire', 'Specialized tech roles', 'Fast, quality shortlists'],
  },
  {
    id: 'development',
    title: 'Product Development',
    eyebrow: 'Development',
    body: 'End-to-end web, cloud, and mobile engineering — from blueprint and UX through production-ready platforms your teams can own.',
    points: ['Product engineering', 'Cloud & integrations', 'UI/UX to launch'],
  },
  {
    id: 'consulting',
    title: 'Consulting & Training',
    eyebrow: 'Consulting',
    body: 'Architecture advisory, transformation roadmaps, and hands-on training that strengthen how your organization builds and ships.',
    points: ['Architecture reviews', 'Delivery playbooks', 'Team enablement'],
  },
]

export function Services() {
  return (
    <section id="services" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="font-display text-sm font-semibold tracking-[0.18em] text-blue uppercase">
            Services
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy text-balance sm:text-4xl">
            Three ways we move work forward.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Staffing, development, and consulting — focused on outcomes, not noise.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group border-t border-navy/15 pt-6"
            >
              <p className="font-display text-xs font-semibold tracking-[0.2em] text-blue uppercase">
                {service.eyebrow}
              </p>
              <h3 className="mt-3 font-display text-xl font-bold text-navy">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{service.body}</p>
              <ul className="mt-5 space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-ink/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
