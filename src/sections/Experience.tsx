import { motion } from 'framer-motion'
import { EXPERIENCES } from '../constants/data'
import { useScrollReveal, fadeUp, staggerContainer } from '../hooks/useScrollReveal'

const typeColors = {
  work: 'var(--sketch-blue)',
  education: 'var(--sketch-tan)',
  achievement: 'var(--sketch-red)',
}
const typeLabels = { work: 'Work', education: 'Education', achievement: 'Achievement' }

export default function Experience() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="experience" className="relative py-24" style={{ background: '#F5F2EB' }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(43,43,43,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(43,43,43,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>

          <motion.div variants={fadeUp} className="mb-16">
            <h2 className="font-sketch text-5xl md:text-6xl text-charcoal sketch-underline">Experience</h2>
            <p className="font-hand text-xl text-graphite mt-4">— the road so far, sketched out</p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Central path */}
            <svg className="absolute left-6 top-0 bottom-0" width="20" style={{ height: '100%' }} viewBox="0 0 20 1000" preserveAspectRatio="none" fill="none">
              <motion.path
                d="M10,0 Q12,100 9,200 Q7,300 11,400 Q13,500 9,600 Q7,700 11,800 Q13,900 10,1000"
                stroke="#2B2B2B" strokeWidth="1.8" strokeDasharray="8 5" fill="none"
                initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
            </svg>

            <div className="flex flex-col gap-10 pl-16">
              {EXPERIENCES.map((exp, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute -left-10 top-5"
                    style={{ width: 18, height: 18, border: `2.5px solid ${typeColors[exp.type]}`, borderRadius: '50%', background: 'var(--paper)' }}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.2 + i * 0.15 }}
                  />

                  <div
                    className="sketch-card p-6"
                    style={{ borderLeft: `3px solid ${typeColors[exp.type]}` }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-sketch text-2xl text-pencil">{exp.role}</h3>
                        <p className="font-body text-graphite font-medium text-sm mt-0.5">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="font-hand text-lg text-graphite">{exp.period}</span>
                        <span className="font-hand text-base px-2 py-0.5"
                          style={{ color: typeColors[exp.type], border: `1px dashed ${typeColors[exp.type]}`, borderRadius: 2 }}>
                          {typeLabels[exp.type]}
                        </span>
                      </div>
                    </div>

                    <ul className="flex flex-col gap-2">
                      {exp.description.map((d, j) => (
                        <li key={j} className="flex items-start gap-3 font-body text-graphite text-sm">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0 mt-1">
                            <path d="M2,6 Q4,2 10,6" stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round"/>
                            <polygon points="8,3 10,6 8,9" fill="#2B2B2B"/>
                          </svg>
                          {d}
                        </li>
                      ))}
                    </ul>

                    {/* Corner decoration */}
                    <svg className="absolute top-2 right-2 opacity-20" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4,2 L18,2 L18,16" stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
