import { motion } from 'framer-motion'
import { useScrollReveal, fadeUp, staggerContainer } from '../hooks/useScrollReveal'

const education = [
  { year: '2022–2026', title: 'B.Tech Computer Engineering', place: 'G H Patel College of Engineering & Technology (GCET)', note: 'Expected May 2026' },
]

const highlights = [
  { label: 'Role', value: 'Software Developer Intern @ eSparkBiz Technologies' },
  { label: 'Club', value: 'Executive Member, CSI-GCET' },
  { label: 'Mobile', value: 'Flutter Developer Intern @ GPHOOD TECH NIGAM' },
  { label: 'Focus', value: 'Full Stack Web · Flutter · REST APIs · Cloud Backends' },
]

const interests = ['Full Stack Apps', 'Flutter Mobile', 'REST APIs', 'Cloud Backends', 'Hackathons', 'Open Source']

export default function About() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="about" className="relative py-24" style={{ background: 'var(--paper)' }}>
      {/* Section heading */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>

          {/* Title */}
          <motion.div variants={fadeUp} className="mb-16 flex items-end gap-4">
            <h2 className="font-sketch text-5xl md:text-6xl text-charcoal sketch-underline">About Me</h2>
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="mb-2 opacity-60">
              <path d="M5,20 Q20,5 55,18" stroke="#C97B7B" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3"/>
              <path d="M45,10 L55,18 L48,26" stroke="#C97B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT: Bio + highlights */}
            <div className="flex flex-col gap-8">
              {/* Bio sticky note style */}
              <motion.div variants={fadeUp} className="relative">
                <div className="notebook-lines p-8 rounded-sm" style={{ border: '1.5px solid rgba(43,43,43,0.15)', background: 'rgba(255,255,255,0.6)' }}>
                  {/* Red margin line */}
                  <div className="absolute left-12 top-0 bottom-0" style={{ width: '1.5px', background: 'rgba(201,123,123,0.3)' }} />
                  <p className="font-body text-graphite text-base leading-8 pl-8">
                    Hey! I'm <span className="font-sketch text-lg text-pencil font-bold">Kevin Dave</span> — a final-year Computer Engineering student focused on <span className="sketch-highlight">full-stack web</span> and <span className="sketch-highlight">mobile development</span>.
                  </p>
                  <p className="font-body text-graphite text-base leading-8 pl-8 mt-4">
                    I build scalable apps using Flutter, Next.js, Node.js, Firebase, Supabase, MongoDB, PostgreSQL, and REST APIs. I keep AI/ML as a supporting skill while prioritizing practical web and mobile products.
                  </p>
                  {/* Page number */}
                  <p className="font-hand text-graphite text-xl mt-4 pl-8 opacity-50">pg. 01</p>
                </div>
              </motion.div>

              {/* Quick facts as torn paper cards */}
              <motion.div variants={fadeUp} className="grid grid-cols-1 gap-3">
                {highlights.map((h, i) => (
                  <motion.div key={i} className="flex items-start gap-4 sketch-card p-4" whileHover={{ x: 4 }}>
                    <span className="font-hand text-xl text-sketch-blue w-20 flex-shrink-0">{h.label}</span>
                    <svg width="2" height="28" viewBox="0 0 2 28" className="flex-shrink-0 mt-1">
                      <path d="M1,2 Q1.5,8 1,14 Q0.5,20 1,26" stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span className="font-body text-pencil text-sm leading-relaxed">{h.value}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT: Education timeline + Interests */}
            <div className="flex flex-col gap-10">
              {/* Education timeline */}
              <motion.div variants={fadeUp}>
                <h3 className="font-sketch text-3xl text-pencil mb-6 flex items-center gap-2">
                  Education
                  <svg width="30" height="12" viewBox="0 0 30 12" fill="none">
                    <path d="M2,6 Q10,2 28,6" stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 2"/>
                  </svg>
                </h3>
                {education.map((e, i) => (
                  <div key={i} className="relative pl-8">
                    {/* Dot */}
                    <div className="absolute left-0 top-1" style={{ width: 14, height: 14, border: '2px solid #2B2B2B', borderRadius: '50%', background: 'var(--paper)' }} />
                    {/* Line */}
                    <div className="absolute left-[6px] top-4 bottom-0" style={{ width: '1.5px', background: 'rgba(43,43,43,0.2)', borderStyle: 'dashed' }} />
                    <div className="sketch-card p-5 mb-4">
                      <p className="font-hand text-xl text-sketch-blue">{e.year}</p>
                      <p className="font-sketch text-xl text-pencil font-bold mt-1">{e.title}</p>
                      <p className="font-body text-graphite text-sm mt-1">{e.place}</p>
                      <div className="mt-2 inline-block px-3 py-1 font-hand text-base text-sketch-red" style={{ border: '1px dashed var(--sketch-red)', borderRadius: 2 }}>{e.note}</div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Interests as sketch bubbles */}
              <motion.div variants={fadeUp}>
                <h3 className="font-sketch text-3xl text-pencil mb-4">Interests</h3>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest, i) => (
                    <motion.span
                      key={i}
                      className="font-hand text-xl text-pencil px-4 py-2"
                      style={{ border: '1.5px solid #2B2B2B', borderRadius: '999px', background: i % 2 === 0 ? 'rgba(107,140,174,0.08)' : 'rgba(201,123,123,0.08)', transform: `rotate(${(i % 3 - 1) * 1.5}deg)` }}
                      whileHover={{ scale: 1.08, rotate: 0 }}
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Hand-drawn stats */}
              <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4">
                {[
                  { num: '7+', label: 'Projects' },
                  { num: '2+', label: 'Years Coding' },
                  { num: '5+', label: 'Tech Stacks' },
                ].map((stat, i) => (
                  <div key={i} className="text-center sketch-card p-4" style={{ transform: `rotate(${(i - 1) * 0.8}deg)` }}>
                    <p className="font-sketch text-4xl text-pencil">{stat.num}</p>
                    <p className="font-hand text-lg text-graphite">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sketchy bottom divider */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 50" fill="none" height="50">
        <path d="M0,25 Q180,5 360,28 Q540,50 720,20 Q900,0 1080,28 Q1260,50 1440,20" stroke="#2B2B2B" strokeWidth="1.2" strokeDasharray="10 6" fill="none"/>
      </svg>
    </section>
  )
}
