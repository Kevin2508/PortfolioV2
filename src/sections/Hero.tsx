import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ROLES } from '../constants/data'
import { useScrollReveal, fadeUp, staggerContainer } from '../hooks/useScrollReveal'
import ResumePreviewLink from '../components/ResumePreviewLink'

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const { ref, inView } = useScrollReveal(0.1)

  useEffect(() => {
    const t = setInterval(() => setRoleIndex(i => (i + 1) % ROLES.length), 2400)
    return () => clearInterval(t)
  }, [])

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ background: 'var(--paper)' }}>
      <div className="absolute inset-0 notebook-lines opacity-40 pointer-events-none" />
      <div className="absolute top-0 bottom-0 pointer-events-none" style={{ left: '8%', width: '2px', background: 'rgba(201,123,123,0.25)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

          {/* LEFT */}
          <div className="flex flex-col gap-6 z-10">
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
                <path d="M2,8 Q10,4 20,8 Q30,12 38,8" stroke="#C97B7B" strokeWidth="2" strokeLinecap="round"/>
                <polygon points="34,5 39,8 34,11" fill="#C97B7B"/>
              </svg>
              <span className="font-hand text-2xl text-sketch-red" style={{ transform: 'rotate(-1deg)', display: 'inline-block' }}>Hey there! I'm</span>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h1 className="font-sketch text-6xl md:text-7xl lg:text-8xl text-charcoal leading-none" style={{ letterSpacing: '-1px' }}>
                Dave<br />
                <span className="relative inline-block">
                  Kevin
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 14" height="14" fill="none" preserveAspectRatio="none">
                    <motion.path d="M2,8 Q30,3 80,8 Q130,13 180,7 Q230,2 298,8" stroke="#C4A882" strokeWidth="4" strokeLinecap="round"
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.8 }}/>
                  </svg>
                </span>
              </h1>
              <p className="font-sketch text-3xl md:text-4xl text-graphite mt-2">Sharadbhai</p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-3 h-12 overflow-hidden">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="#2B2B2B" strokeWidth="1.5" strokeDasharray="5 3"/>
                <circle cx="10" cy="10" r="3" fill="#2B2B2B"/>
              </svg>
              <div className="overflow-hidden h-12 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span key={roleIndex} className="font-sketch text-2xl md:text-3xl text-sketch-blue block"
                    initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}>
                    {ROLES[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.p variants={fadeUp} className="font-body text-graphite text-lg max-w-lg leading-relaxed">
              A Computer Engineering student at GCET focused on{' '}
              <span className="sketch-highlight font-medium">full-stack web and mobile development</span>
              {' '}— building Flutter apps, scalable APIs, and cloud-backed products.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-2">
              <motion.button className="sketch-btn primary magnetic-btn" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => scrollTo('#projects')}>
                View Projects
              </motion.button>
              <ResumePreviewLink className="sketch-btn magnetic-btn" label="Preview Resume" />
              <motion.button className="sketch-btn magnetic-btn" style={{ borderColor: 'var(--sketch-blue)', color: 'var(--sketch-blue)' }}
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => scrollTo('#contact')}>
                Contact Me
              </motion.button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-2 mt-4 opacity-50">
              <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12,4 L12,18 M6,13 L12,19 L18,13" stroke="#2B2B2B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
              <span className="font-hand text-xl text-graphite">scroll to explore</span>
            </motion.div>
          </div>

          {/* RIGHT: Avatar */}
          <motion.div variants={fadeUp} className="flex justify-center items-center relative">
            <div className="relative">
              <motion.svg width="360" height="420" viewBox="0 0 360 420" fill="none" className="absolute -inset-6">
                <motion.path d="M10,15 Q15,8 355,12 Q362,15 358,410 Q355,418 8,415 Q2,412 6,12 Z"
                  stroke="#2B2B2B" strokeWidth="2.5" fill="none" strokeDasharray="10 4"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.4 }}/>
              </motion.svg>

              <div className="relative overflow-hidden" style={{ width: 320, height: 380, background: '#F5F2EC', border: '2px solid #2B2B2B', borderRadius: '4px' }}>
                <div className="absolute inset-0 notebook-lines opacity-30" />
                <svg width="320" height="380" viewBox="0 0 320 380" fill="none" className="absolute inset-0">
                  {/* Desk */}
                  <rect x="20" y="280" width="280" height="8" rx="2" fill="#D4C9B0" stroke="#2B2B2B" strokeWidth="1.5"/>
                  {/* Laptop */}
                  <rect x="100" y="220" width="120" height="72" rx="4" fill="#FAF8F2" stroke="#2B2B2B" strokeWidth="2"/>
                  <rect x="85" y="290" width="150" height="8" rx="2" fill="#E8E3D8" stroke="#2B2B2B" strokeWidth="1.5"/>
                  <rect x="108" y="228" width="104" height="56" rx="2" fill="white" stroke="#5C5C5C" strokeWidth="1"/>
                  <line x1="115" y1="240" x2="195" y2="240" stroke="#6B8CAE" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="115" y1="252" x2="185" y2="252" stroke="#6B8CAE" strokeWidth="1" strokeLinecap="round"/>
                  <line x1="115" y1="264" x2="175" y2="264" stroke="#C97B7B" strokeWidth="1" strokeLinecap="round"/>
                  <line x1="115" y1="274" x2="190" y2="274" stroke="#6B8CAE" strokeWidth="1" strokeLinecap="round"/>
                  {/* Body */}
                  <path d="M130,200 Q130,220 160,225 Q190,220 190,200 L185,280 L135,280 Z" fill="#E8E3D8" stroke="#2B2B2B" strokeWidth="2"/>
                  {/* Head */}
                  <ellipse cx="160" cy="155" rx="45" ry="50" fill="#FAF0E0" stroke="#2B2B2B" strokeWidth="2.5"/>
                  {/* Hair */}
                  <path d="M115,145 Q120,105 160,108 Q200,105 205,145" fill="#3D2B1A" stroke="#2B2B2B" strokeWidth="2"/>
                  <path d="M115,145 Q112,128 118,116 Q126,108 140,106" fill="#3D2B1A" stroke="#2B2B2B" strokeWidth="1.5"/>
                  <path d="M205,145 Q208,128 202,116 Q194,108 180,106" fill="#3D2B1A" stroke="#2B2B2B" strokeWidth="1.5"/>
                  {/* Eyes */}
                  <ellipse cx="146" cy="155" rx="7" ry="8" fill="white" stroke="#2B2B2B" strokeWidth="1.5"/>
                  <ellipse cx="174" cy="155" rx="7" ry="8" fill="white" stroke="#2B2B2B" strokeWidth="1.5"/>
                  <circle cx="148" cy="156" r="4" fill="#3D2B1A"/>
                  <circle cx="176" cy="156" r="4" fill="#3D2B1A"/>
                  <circle cx="150" cy="154" r="1.5" fill="white"/>
                  <circle cx="178" cy="154" r="1.5" fill="white"/>
                  {/* Eyebrows */}
                  <path d="M139,146 Q146,142 153,145" stroke="#3D2B1A" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M167,145 Q174,142 181,146" stroke="#3D2B1A" strokeWidth="2" strokeLinecap="round"/>
                  {/* Glasses */}
                  <rect x="137" y="148" width="22" height="16" rx="4" fill="none" stroke="#2B2B2B" strokeWidth="1.8"/>
                  <rect x="163" y="148" width="22" height="16" rx="4" fill="none" stroke="#2B2B2B" strokeWidth="1.8"/>
                  <line x1="159" y1="156" x2="163" y2="156" stroke="#2B2B2B" strokeWidth="1.5"/>
                  <line x1="115" y1="156" x2="137" y2="156" stroke="#2B2B2B" strokeWidth="1.5"/>
                  <line x1="185" y1="156" x2="205" y2="156" stroke="#2B2B2B" strokeWidth="1.5"/>
                  {/* Smile */}
                  <path d="M148,182 Q160,190 172,182" stroke="#2B2B2B" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  {/* Annotations */}
                  <text x="220" y="160" fontFamily="Caveat, cursive" fontSize="14" fill="#6B8CAE" transform="rotate(8,220,160)">&lt;/&gt;</text>
                  <text x="30" y="200" fontFamily="Caveat, cursive" fontSize="13" fill="#C97B7B" transform="rotate(-5,30,200)">Flutter!</text>
                  <text x="228" y="245" fontFamily="Caveat, cursive" fontSize="13" fill="#5C5C5C" transform="rotate(5,228,245)">APIs</text>
                </svg>
                <svg className="absolute bottom-0 right-0" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M40,40 L0,40 L40,0 Z" fill="#E0D9CC" stroke="#2B2B2B" strokeWidth="1"/>
                </svg>
              </div>

              <div className="sticky-note absolute -bottom-6 -right-8 text-sm max-w-[160px]" style={{ transform: 'rotate(3deg)' }}>
                <p className="font-sketch text-base text-pencil">"Building apps,<br/>one API at a time"</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full" height="60">
          <path d="M0,30 Q100,10 200,35 Q350,60 500,25 Q650,5 800,30 Q950,55 1100,20 Q1250,0 1440,30" stroke="#2B2B2B" strokeWidth="1.5" strokeDasharray="8 6" fill="none"/>
        </svg>
      </div>
    </section>
  )
}
