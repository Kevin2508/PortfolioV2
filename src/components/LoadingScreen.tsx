import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<'drawing' | 'filling' | 'done'>('drawing')

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => onComplete(), 600)
          return 100
        }
        return prev + Math.random() * 4 + 1
      })
    }, 60)
    return () => clearInterval(interval)
  }, [onComplete])

  useEffect(() => {
    if (progress >= 40) setPhase('filling')
    if (progress >= 100) setPhase('done')
  }, [progress])

  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`
      }} />

      {/* Animated name being drawn */}
      <div className="flex flex-col items-center gap-8 relative z-10">
        {/* SVG name drawing animation */}
        <motion.svg
          width="420" height="120"
          viewBox="0 0 420 120"
          fill="none"
          className="overflow-visible"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* D */}
          <motion.path
            d="M20,20 L20,90 Q60,90 60,55 Q60,20 20,20"
            stroke="#2B2B2B" strokeWidth="3" strokeLinecap="round" fill="none"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          />
          {/* a */}
          <motion.path
            d="M75,45 Q75,35 85,35 Q95,35 95,45 L95,75 Q85,80 75,72 Q70,65 75,55 Q80,48 95,48"
            stroke="#2B2B2B" strokeWidth="3" strokeLinecap="round" fill="none"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          {/* v */}
          <motion.path
            d="M105,38 L115,72 L125,38"
            stroke="#2B2B2B" strokeWidth="3" strokeLinecap="round" fill="none"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          />
          {/* e */}
          <motion.path
            d="M135,56 Q135,38 150,38 Q162,38 162,55 Q162,72 150,72 Q138,72 135,60 L162,55"
            stroke="#2B2B2B" strokeWidth="3" strokeLinecap="round" fill="none"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          />

          {/* K */}
          <motion.path d="M185,20 L185,90 M185,52 L210,20 M185,52 L210,90"
            stroke="#2B2B2B" strokeWidth="3" strokeLinecap="round" fill="none"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          />
          {/* e */}
          <motion.path
            d="M220,56 Q220,38 235,38 Q247,38 247,55 Q247,72 235,72 Q223,72 220,60 L247,55"
            stroke="#2B2B2B" strokeWidth="3" strokeLinecap="round" fill="none"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, delay: 1.4 }}
          />
          {/* v */}
          <motion.path d="M255,38 L265,72 L275,38"
            stroke="#2B2B2B" strokeWidth="3" strokeLinecap="round" fill="none"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          />
          {/* i */}
          <motion.path d="M282,38 L282,72"
            stroke="#2B2B2B" strokeWidth="3" strokeLinecap="round" fill="none"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 0.3, delay: 1.8 }}
          />
          <motion.circle cx="282" cy="28" r="3" fill="#2B2B2B"
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ delay: 1.85 }}
          />
          {/* n */}
          <motion.path d="M290,38 L290,72 M290,48 Q290,38 308,38 L308,72"
            stroke="#2B2B2B" strokeWidth="3" strokeLinecap="round" fill="none"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 1.9 }}
          />

          {/* Sketchy underline */}
          <motion.path
            d="M18,100 Q100,95 210,98 Q310,101 400,96"
            stroke="#C4A882" strokeWidth="4" strokeLinecap="round" fill="none"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 2.3 }}
          />
        </motion.svg>

        {/* Subtitle */}
        <motion.p
          className="font-sketch text-graphite text-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          Full Stack Web & Mobile Developer
        </motion.p>

        {/* Hand-drawn progress bar */}
        <motion.div
          className="w-64 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <svg width="256" height="24" viewBox="0 0 256 24" fill="none" className="w-full">
            {/* Bar outline */}
            <path d="M4,12 Q8,10 252,12" stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeDasharray="4 2"/>
            {/* Border */}
            <rect x="1" y="5" width="254" height="14" rx="2"
              stroke="#2B2B2B" strokeWidth="1.5" fill="none"
              strokeDasharray="8 3"
            />
            {/* Fill */}
            <motion.rect
              x="3" y="7" height="10" rx="1"
              fill="none"
              stroke="#5C5C5C"
              strokeWidth="2"
              strokeDasharray="5 3"
              initial={{ width: 0 }}
              animate={{ width: Math.min(250, (progress / 100) * 250) }}
              transition={{ duration: 0.1 }}
            />
          </svg>
          {/* Progress label */}
          <p className="text-center font-sketch text-pencil text-sm mt-1">
            sketching... {Math.round(progress)}%
          </p>
        </motion.div>

        {/* Floating pencil doodle */}
        <motion.div
          className="absolute -bottom-16 right-20 opacity-20"
          animate={{ rotate: [0, 5, -3, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <line x1="10" y1="50" x2="50" y2="10" stroke="#2B2B2B" strokeWidth="3" strokeLinecap="round"/>
            <polygon points="48,8 54,14 50,10" fill="#2B2B2B"/>
          </svg>
        </motion.div>
      </div>
    </motion.div>
  )
}
