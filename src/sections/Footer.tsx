import { motion } from 'framer-motion'
import { CONTACT } from '../constants/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative py-12 overflow-hidden" style={{ background: 'var(--paper)', borderTop: '1.5px solid rgba(43,43,43,0.1)' }}>
      {/* Animated pencil line across top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 8" height="8" fill="none" className="w-full">
          <motion.path
            d="M0,4 Q180,1 360,5 Q540,8 720,3 Q900,0 1080,5 Q1260,8 1440,3"
            stroke="#2B2B2B" strokeWidth="1.5" fill="none"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Signature */}
          <div className="flex items-center gap-4">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <rect x="16" y="3" width="12" height="28" rx="2" fill="#FAF8F2" stroke="#2B2B2B" strokeWidth="1.8"/>
              <polygon points="16,31 28,31 22,41" fill="#C4A882" stroke="#2B2B2B" strokeWidth="1.5"/>
              <rect x="16" y="3" width="12" height="7" rx="2" fill="#C97B7B" stroke="#2B2B2B" strokeWidth="1.5"/>
              <line x1="16" y1="10" x2="28" y2="10" stroke="#2B2B2B" strokeWidth="1.5"/>
            </svg>
            <div>
              <p className="font-sketch text-2xl text-pencil">Dave Kevin</p>
              <p className="font-hand text-base text-graphite">Full Stack Web & Mobile Developer</p>
            </div>
          </div>

          {/* Center: sketched copyright */}
          <div className="text-center">
            <svg width="200" height="32" viewBox="0 0 200 32" fill="none" className="mx-auto mb-1">
              <path d="M10,16 Q100,8 190,16" stroke="#2B2B2B" strokeWidth="1" strokeDasharray="5 3" fill="none"/>
            </svg>
            <p className="font-hand text-lg text-graphite">
              &copy; {year} Dave Kevin Sharadbhai — All rights sketched.
            </p>
          </div>

          {/* Right: hand-drawn social icons */}
          <div className="flex items-center gap-4">
            {[
              { href: CONTACT.github, label: 'GH', title: 'GitHub' },
              { href: CONTACT.linkedin, label: 'LI', title: 'LinkedIn' },
              { href: `mailto:${CONTACT.email}`, label: '@', title: 'Email' },
            ].map((s, i) => (
              <motion.a
                key={i} href={s.href} title={s.title}
                className="font-sketch text-lg text-graphite hover:text-pencil transition-colors flex items-center justify-center"
                style={{ width: 36, height: 36, border: '1.5px solid rgba(43,43,43,0.3)', borderRadius: 2, textDecoration: 'none' }}
                whileHover={{ scale: 1.12, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                {s.label}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Animated pencil trace bottom */}
        <div className="mt-8 flex justify-center">
          <motion.svg width="120" height="20" viewBox="0 0 120 20" fill="none"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <path d="M10,10 Q30,4 60,10 Q90,16 110,10" stroke="#C4A882" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="60" cy="10" r="3" fill="#C4A882"/>
          </motion.svg>
        </div>
      </div>
    </footer>
  )
}
