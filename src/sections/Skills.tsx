import { useState } from 'react'
import { motion } from 'framer-motion'
import { SKILLS } from '../constants/data'
import { useScrollReveal, fadeUp, staggerContainer } from '../hooks/useScrollReveal'

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Flutter', 'Databases', 'Languages', 'Tools', 'AI/ML']

export default function Skills() {
  const [active, setActive] = useState('All')
  const { ref, inView } = useScrollReveal()

  const filtered = active === 'All' ? SKILLS : SKILLS.filter(s => s.category === active)

  return (
    <section id="skills" className="relative py-24" style={{ background: '#F5F2EB' }}>
      {/* Graph paper grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(43,43,43,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(43,43,43,0.04) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>

          <motion.div variants={fadeUp} className="mb-12">
            <h2 className="font-sketch text-5xl md:text-6xl text-charcoal sketch-underline mb-2">Skills</h2>
            <p className="font-hand text-xl text-graphite mt-4">— an engineer's sketchboard of tools</p>
          </motion.div>

          {/* Category filter tabs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                className="font-hand text-xl px-4 py-1.5 transition-all duration-200 cursor-none"
                style={{
                  border: '1.5px solid #2B2B2B',
                  borderRadius: 2,
                  background: active === cat ? '#2B2B2B' : 'transparent',
                  color: active === cat ? '#FAF8F2' : '#5C5C5C',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                variants={fadeUp}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="sketch-card p-5 group"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-sketch text-xl text-pencil">{skill.name}</span>
                  <span className="font-hand text-lg text-graphite">{skill.level}%</span>
                </div>

                {/* Hand-drawn progress bar */}
                <div className="sketch-progress">
                  <motion.div
                    className="sketch-progress-fill"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.05, ease: [0.25, 1, 0.5, 1] }}
                  />
                </div>

                {/* Category tag */}
                <div className="mt-3 flex items-center gap-2">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <circle cx="4" cy="4" r="3" stroke="#5C5C5C" strokeWidth="1"/>
                  </svg>
                  <span className="font-hand text-base text-graphite">{skill.category}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom decoration */}
          <motion.div variants={fadeUp} className="mt-16 flex justify-center">
            <svg width="300" height="40" viewBox="0 0 300 40" fill="none">
              <path d="M10,20 Q75,5 150,20 Q225,35 290,20" stroke="#2B2B2B" strokeWidth="1.5" strokeDasharray="6 4" fill="none"/>
              <circle cx="150" cy="20" r="5" stroke="#2B2B2B" strokeWidth="1.5" fill="var(--paper)"/>
              <circle cx="10" cy="20" r="3" fill="#2B2B2B"/>
              <circle cx="290" cy="20" r="3" fill="#2B2B2B"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
