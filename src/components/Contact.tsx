import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'

export function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-sand py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-display text-sm font-semibold tracking-[0.18em] text-blue uppercase">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy text-balance sm:text-4xl">
            Tell us what you’re building.
          </h2>
          <p className="mt-4 max-w-md text-lg text-muted">
            Share a role, a product need, or a delivery challenge — we’ll follow up with a clear
            next step.
          </p>

          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="font-display font-semibold tracking-wide text-navy uppercase">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href="mailto:hello@rohlax.com"
                  className="text-muted transition hover:text-blue"
                >
                  hello@rohlax.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-display font-semibold tracking-wide text-navy uppercase">
                Focus
              </dt>
              <dd className="mt-1 text-muted">Staffing · Development · Consulting</dd>
            </div>
          </dl>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          onSubmit={onSubmit}
          className="rounded-2xl border border-line bg-white p-6 shadow-[0_20px_50px_rgba(0,43,91,0.06)] sm:p-8"
        >
          {sent ? (
            <div className="flex min-h-[280px] flex-col items-start justify-center">
              <p className="font-display text-2xl font-bold text-navy">Thanks — message received.</p>
              <p className="mt-3 text-muted">
                We’ll review what you shared and get back to you shortly.
              </p>
              <button
                type="button"
                className="mt-6 font-display text-sm font-semibold text-blue hover:underline"
                onClick={() => setSent(false)}
              >
                Send another message
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <label className="block">
                <span className="mb-1.5 block font-display text-sm font-semibold text-navy">
                  Name
                </span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="w-full rounded-lg border border-line bg-cream px-3.5 py-2.5 outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block font-display text-sm font-semibold text-navy">
                  Work email
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="w-full rounded-lg border border-line bg-cream px-3.5 py-2.5 outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block font-display text-sm font-semibold text-navy">
                  How can we help?
                </span>
                <select
                  name="interest"
                  className="w-full rounded-lg border border-line bg-cream px-3.5 py-2.5 outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20"
                  defaultValue="staffing"
                >
                  <option value="staffing">IT Technical Staffing</option>
                  <option value="development">Product Development</option>
                  <option value="consulting">Consulting & Training</option>
                  <option value="other">Something else</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block font-display text-sm font-semibold text-navy">
                  Message
                </span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="w-full resize-y rounded-lg border border-line bg-cream px-3.5 py-2.5 outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20"
                  placeholder="Roles, timeline, or project context…"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-navy px-5 py-3 font-display font-semibold text-white transition hover:bg-navy-soft"
              >
                Send message
              </button>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  )
}
