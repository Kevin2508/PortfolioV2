import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROJECTS } from '../constants/data'
import { useScrollReveal, fadeUp, staggerContainer } from '../hooks/useScrollReveal'

const FILTERS = ['All', 'Full Stack', 'Mobile', 'AI/ML']

const categoryColors: Record<string, string> = {
  Mobile: 'rgba(107,140,174,0.15)',
  'Full Stack': 'rgba(196,168,130,0.2)',
  'AI/ML': 'rgba(201,123,123,0.12)',
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const { ref, inView } = useScrollReveal()

  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter)

  return (
    <section id="projects" className="relative py-24" style={{ background: 'var(--paper)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>

          <motion.div variants={fadeUp} className="mb-12">
            <h2 className="font-sketch text-5xl md:text-6xl text-charcoal sketch-underline">Projects</h2>
            <p className="font-hand text-xl text-graphite mt-4">— things I've built that I'm proud of</p>
          </motion.div>

          {/* Filter buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
            {FILTERS.map(f => (
              <motion.button key={f} onClick={() => setFilter(f)}
                className="font-hand text-xl px-5 py-2 transition-all cursor-none"
                style={{ border: '1.5px solid #2B2B2B', borderRadius: 2, background: filter === f ? '#2B2B2B' : 'transparent', color: filter === f ? '#FAF8F2' : '#5C5C5C' }}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                {f}
              </motion.button>
            ))}
          </motion.div>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="sketch-card group cursor-none overflow-hidden flex flex-col"
                  style={{ background: categoryColors[project.category] || 'white' }}
                  whileHover={{ y: -6, rotate: 0.2 }}
                >
                  {/* Sketched thumbnail */}
                  <div className="relative overflow-hidden" style={{ height: 180, background: '#F0ECE3', borderBottom: '1.5px solid #2B2B2B' }}>
                    <div className="absolute inset-0 notebook-lines opacity-20" />
                    {/* Animated pencil border on hover */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 180" fill="none" preserveAspectRatio="none">
                      <motion.rect x="4" y="4" width="392" height="172" rx="2" stroke="#2B2B2B" strokeWidth="2"
                        strokeDasharray="10 6" fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileHover={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                      />
                    </svg>

                    {/* Project icon illustration */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="opacity-20">
                        {project.category === 'Mobile' && (
                          <>
                            <rect x="25" y="10" width="50" height="80" rx="8" stroke="#2B2B2B" strokeWidth="2.5"/>
                            <line x1="35" y1="20" x2="65" y2="20" stroke="#2B2B2B" strokeWidth="1.5"/>
                            <circle cx="50" cy="82" r="4" stroke="#2B2B2B" strokeWidth="1.5"/>
                          </>
                        )}
                        {project.category === 'Full Stack' && (
                          <>
                            <rect x="10" y="20" width="80" height="55" rx="4" stroke="#2B2B2B" strokeWidth="2.5"/>
                            <line x1="10" y1="35" x2="90" y2="35" stroke="#2B2B2B" strokeWidth="1.5"/>
                            <circle cx="22" cy="27" r="3" fill="#2B2B2B"/>
                            <circle cx="34" cy="27" r="3" fill="#2B2B2B"/>
                            <line x1="20" y1="50" x2="80" y2="50" stroke="#2B2B2B" strokeWidth="1.2" strokeDasharray="4 3"/>
                            <line x1="20" y1="62" x2="65" y2="62" stroke="#2B2B2B" strokeWidth="1.2" strokeDasharray="4 3"/>
                          </>
                        )}
                        {project.category === 'AI/ML' && (
                          <>
                            <circle cx="50" cy="50" r="18" stroke="#2B2B2B" strokeWidth="2"/>
                            {[0,60,120,180,240,300].map(a => {
                              const r1 = Math.PI * a / 180
                              return <line key={a} x1={50+18*Math.cos(r1)} y1={50+18*Math.sin(r1)} x2={50+35*Math.cos(r1)} y2={50+35*Math.sin(r1)} stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round"/>
                            })}
                            <circle cx="50" cy="50" r="6" fill="#2B2B2B"/>
                          </>
                        )}
                      </svg>
                    </div>

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-3 right-3 font-hand text-base px-2 py-0.5 text-sketch-red" style={{ border: '1px solid var(--sketch-red)', borderRadius: 2, background: 'rgba(255,255,255,0.8)', transform: 'rotate(2deg)' }}>
                        Featured
                      </div>
                    )}

                    {/* Category label */}
                    <div className="absolute bottom-3 left-3 font-hand text-base text-graphite px-2 py-0.5" style={{ border: '1px dashed #5C5C5C', borderRadius: 2, background: 'rgba(255,255,255,0.7)' }}>
                      {project.category}
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <h3 className="font-sketch text-2xl text-pencil leading-tight">{project.title}</h3>
                    <p className="font-body text-graphite text-sm leading-relaxed flex-1">{project.description}</p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map(t => (
                        <span key={t} className="font-hand text-base px-2 py-0.5 text-pencil" style={{ border: '1px solid rgba(43,43,43,0.3)', borderRadius: 999, fontSize: '0.8rem' }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2 pt-1">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className="font-hand text-lg px-3 py-1 text-pencil transition-all hover:bg-pencil hover:text-paper"
                          style={{ border: '1.5px solid #2B2B2B', borderRadius: 2 }}>
                          GitHub
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                          className="font-hand text-lg px-3 py-1 text-sketch-blue transition-all"
                          style={{ border: '1.5px solid var(--sketch-blue)', borderRadius: 2 }}>
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 50" fill="none" height="50">
        <path d="M0,25 Q180,5 360,28 Q540,50 720,20 Q900,0 1080,28 Q1260,50 1440,20" stroke="#2B2B2B" strokeWidth="1.2" strokeDasharray="10 6" fill="none"/>
      </svg>
    </section>
  )
}
