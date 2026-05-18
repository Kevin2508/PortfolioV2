import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { CONTACT } from '../constants/data'
import { useScrollReveal, fadeUp, staggerContainer } from '../hooks/useScrollReveal'

export default function Contact() {
  const { ref, inView } = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [focused, setFocused] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const socialLinks = [
    {
      label: 'Portfolio', href: CONTACT.portfolio, icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="5" width="18" height="14" rx="3" stroke="#2B2B2B" strokeWidth="1.5"/>
          <path d="M3,9 L21,9" stroke="#2B2B2B" strokeWidth="1.5"/>
          <path d="M8,15 L11,12 L14,15 L17,12" stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      label: 'GitHub', href: CONTACT.github, icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12,2 C6.48,2 2,6.48 2,12 C2,16.42 4.87,20.17 8.84,21.5 C9.34,21.58 9.5,21.27 9.5,21 L9.5,19.31 C6.73,19.91 6.14,17.97 6.14,17.97 C5.68,16.81 5.03,16.5 5.03,16.5 C4.12,15.88 5.1,15.9 5.1,15.9 C6.1,15.97 6.63,16.93 6.63,16.93 C7.5,18.45 8.97,18 9.54,17.76 C9.63,17.11 9.89,16.67 10.17,16.42 C7.95,16.17 5.62,15.31 5.62,11.5 C5.62,10.39 6.01,9.5 6.65,8.79 C6.55,8.54 6.2,7.5 6.75,6.15 C6.75,6.15 7.59,5.88 9.5,7.17 C10.29,6.95 11.15,6.84 12,6.84 C12.85,6.84 13.71,6.95 14.5,7.17 C16.41,5.88 17.25,6.15 17.25,6.15 C17.8,7.5 17.45,8.54 17.35,8.79 C17.99,9.5 18.38,10.39 18.38,11.5 C18.38,15.32 16.04,16.16 13.81,16.41 C14.17,16.72 14.5,17.33 14.5,18.26 L14.5,21 C14.5,21.27 14.66,21.59 15.17,21.5 C19.14,20.16 22,16.42 22,12 C22,6.48 17.52,2 12,2 Z"
            stroke="#2B2B2B" strokeWidth="1.2" fill="none"/>
        </svg>
      )
    },
    {
      label: 'LinkedIn', href: CONTACT.linkedin, icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="4" stroke="#2B2B2B" strokeWidth="1.5"/>
          <line x1="7" y1="10" x2="7" y2="17" stroke="#2B2B2B" strokeWidth="1.8" strokeLinecap="round"/>
          <circle cx="7" cy="7.5" r="1.2" fill="#2B2B2B"/>
          <path d="M11,10 L11,17 M11,13 Q11,10 14,10 Q17,10 17,13 L17,17" stroke="#2B2B2B" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      label: 'Email', href: `mailto:${CONTACT.email}`, icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="5" width="20" height="14" rx="3" stroke="#2B2B2B" strokeWidth="1.5"/>
          <path d="M2,7 L12,14 L22,7" stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
  ]

  return (
    <section id="contact" className="relative py-24" style={{ background: '#F5F2EB' }}>
      <div className="absolute inset-0 notebook-lines opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>

          <motion.div variants={fadeUp} className="mb-14">
            <h2 className="font-sketch text-5xl md:text-6xl text-charcoal sketch-underline">Say Hello</h2>
            <p className="font-hand text-xl text-graphite mt-4">— drop me a note, I'd love to chat</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-14 items-start">
            {/* Contact form */}
            <motion.div variants={fadeUp}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Name */}
                <div className="relative">
                  <label className="font-hand text-xl text-graphite block mb-2">Your Name</label>
                  <div className="relative">
                    <input
                      type="text" required value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                      className="w-full bg-transparent font-body text-pencil text-base py-3 px-4 outline-none"
                      style={{ border: '1.5px solid rgba(43,43,43,0.3)', borderRadius: 2, background: 'rgba(255,255,255,0.6)' }}
                      placeholder="Dave Kevin..."
                    />
                    {/* Sketch border animation on focus */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      style={{ border: '2px solid var(--pencil)', borderRadius: 2 }}
                      animate={{ opacity: focused === 'name' ? 1 : 0, scale: focused === 'name' ? 1 : 0.98 }}
                      transition={{ duration: 0.2 }}
                    />
                    {focused === 'name' && (
                      <motion.div className="absolute -right-2 -top-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M2,14 L8,2 L14,14" stroke="#C97B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="relative">
                  <label className="font-hand text-xl text-graphite block mb-2">Your Email</label>
                  <div className="relative">
                    <input
                      type="email" required value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                      className="w-full bg-transparent font-body text-pencil text-base py-3 px-4 outline-none"
                      style={{ border: '1.5px solid rgba(43,43,43,0.3)', borderRadius: 2, background: 'rgba(255,255,255,0.6)' }}
                      placeholder="you@example.com"
                    />
                    <motion.div className="absolute inset-0 pointer-events-none"
                      style={{ border: '2px solid var(--pencil)', borderRadius: 2 }}
                      animate={{ opacity: focused === 'email' ? 1 : 0, scale: focused === 'email' ? 1 : 0.98 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <label className="font-hand text-xl text-graphite block mb-2">Your Message</label>
                  <div className="relative">
                    <textarea
                      required rows={5} value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                      className="w-full bg-transparent font-body text-pencil text-base py-3 px-4 outline-none resize-none notebook-lines"
                      style={{ border: '1.5px solid rgba(43,43,43,0.3)', borderRadius: 2, background: 'rgba(255,255,255,0.6)', lineHeight: '2rem' }}
                      placeholder="Hey Dave, I'd love to..."
                    />
                    <motion.div className="absolute inset-0 pointer-events-none"
                      style={{ border: '2px solid var(--pencil)', borderRadius: 2 }}
                      animate={{ opacity: focused === 'message' ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  className="sketch-btn primary magnetic-btn self-start text-lg"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </motion.button>

                {submitted && (
                  <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    className="font-hand text-xl text-sketch-blue">
                    Thanks! I'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* Right side: social links + address */}
            <motion.div variants={fadeUp} className="flex flex-col gap-8">
              {/* Hand-drawn map/location placeholder */}
              <div className="sketch-card p-6">
                <p className="font-sketch text-2xl text-pencil mb-1">Based in</p>
                <p className="font-hand text-xl text-graphite">Gujarat, India</p>
                <svg width="100%" height="80" viewBox="0 0 300 80" fill="none" className="mt-4 opacity-30">
                  <path d="M20,60 Q80,20 150,40 Q220,60 280,30" stroke="#2B2B2B" strokeWidth="1.5" strokeDasharray="6 4"/>
                  <circle cx="150" cy="40" r="8" stroke="#C97B7B" strokeWidth="2" fill="none"/>
                  <line x1="150" y1="32" x2="150" y2="10" stroke="#C97B7B" strokeWidth="1.5" strokeDasharray="3 2"/>
                  <polygon points="146,10 154,10 150,4" fill="#C97B7B"/>
                </svg>
              </div>

              {/* Social links */}
              <div className="flex flex-col gap-4">
                <p className="font-sketch text-2xl text-pencil">Find me on</p>
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={i} href={link.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 sketch-card group"
                    style={{ textDecoration: 'none' }}
                    whileHover={{ x: 6 }}
                  >
                    <span className="text-pencil group-hover:text-sketch-blue transition-colors">{link.icon}</span>
                    <span className="font-sketch text-xl text-pencil group-hover:text-sketch-blue transition-colors">{link.label}</span>
                    <svg className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" width="20" height="12" viewBox="0 0 20 12" fill="none">
                      <path d="M2,6 L18,6 M13,2 L18,6 L13,10" stroke="#6B8CAE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
