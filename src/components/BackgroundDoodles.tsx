import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const doodleElements = [
  // Code brackets
  { x: '5%', y: '15%', size: 48, rotate: -12, delay: 0, type: 'brackets' },
  // Circle
  { x: '88%', y: '8%', size: 56, rotate: 8, delay: 0.5, type: 'circle' },
  // Star
  { x: '92%', y: '45%', size: 40, rotate: 15, delay: 1, type: 'star' },
  // Arrow
  { x: '3%', y: '55%', size: 50, rotate: -5, delay: 0.3, type: 'arrow' },
  // AI nodes
  { x: '15%', y: '80%', size: 60, rotate: 0, delay: 0.7, type: 'nodes' },
  // Phone frame
  { x: '85%', y: '72%', size: 44, rotate: 10, delay: 0.2, type: 'phone' },
  // Lightning
  { x: '48%', y: '5%', size: 36, rotate: 5, delay: 0.9, type: 'lightning' },
  // Triangle
  { x: '75%', y: '25%', size: 42, rotate: -8, delay: 0.6, type: 'triangle' },
  // Infinity
  { x: '30%', y: '90%', size: 50, rotate: 0, delay: 0.4, type: 'infinity' },
  // Gear
  { x: '60%', y: '88%', size: 46, rotate: 20, delay: 0.8, type: 'gear' },
]

function DoodleSvg({ type, size }: { type: string; size: number }) {
  const s = size
  const props = { width: s, height: s, viewBox: `0 0 ${s} ${s}`, fill: 'none' as const }
  const stroke = '#2B2B2B'
  const sw = 1.8

  switch (type) {
    case 'brackets':
      return <svg {...props}><path d={`M${s*0.4},${s*0.1} L${s*0.2},${s*0.1} Q${s*0.1},${s*0.1} ${s*0.1},${s*0.2} L${s*0.1},${s*0.8} Q${s*0.1},${s*0.9} ${s*0.2},${s*0.9} L${s*0.4},${s*0.9}`} stroke={stroke} strokeWidth={sw} strokeLinecap="round"/><path d={`M${s*0.6},${s*0.1} L${s*0.8},${s*0.1} Q${s*0.9},${s*0.1} ${s*0.9},${s*0.2} L${s*0.9},${s*0.8} Q${s*0.9},${s*0.9} ${s*0.8},${s*0.9} L${s*0.6},${s*0.9}`} stroke={stroke} strokeWidth={sw} strokeLinecap="round"/></svg>
    case 'circle':
      return <svg {...props}><circle cx={s/2} cy={s/2} r={s*0.38} stroke={stroke} strokeWidth={sw} strokeDasharray="8 5"/></svg>
    case 'star':
      return <svg {...props}><polygon points={`${s/2},${s*0.08} ${s*0.61},${s*0.38} ${s*0.93},${s*0.38} ${s*0.68},${s*0.58} ${s*0.79},${s*0.9} ${s/2},${s*0.72} ${s*0.21},${s*0.9} ${s*0.32},${s*0.58} ${s*0.07},${s*0.38} ${s*0.39},${s*0.38}`} stroke={stroke} strokeWidth={sw} fill="none"/></svg>
    case 'arrow':
      return <svg {...props}><path d={`M${s*0.1},${s*0.5} Q${s*0.3},${s*0.48} ${s*0.8},${s*0.5}`} stroke={stroke} strokeWidth={sw} strokeLinecap="round"/><path d={`M${s*0.65},${s*0.3} L${s*0.85},${s*0.5} L${s*0.65},${s*0.7}`} stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"/></svg>
    case 'nodes':
      return <svg {...props}><circle cx={s*0.2} cy={s*0.5} r={s*0.08} stroke={stroke} strokeWidth={sw}/><circle cx={s*0.5} cy={s*0.2} r={s*0.08} stroke={stroke} strokeWidth={sw}/><circle cx={s*0.8} cy={s*0.5} r={s*0.08} stroke={stroke} strokeWidth={sw}/><circle cx={s*0.5} cy={s*0.8} r={s*0.08} stroke={stroke} strokeWidth={sw}/><line x1={s*0.28} y1={s*0.45} x2={s*0.42} y2={s*0.28} stroke={stroke} strokeWidth={sw*0.7}/><line x1={s*0.58} y1={s*0.28} x2={s*0.72} y2={s*0.45} stroke={stroke} strokeWidth={sw*0.7}/><line x1={s*0.28} y1={s*0.55} x2={s*0.42} y2={s*0.72} stroke={stroke} strokeWidth={sw*0.7}/><line x1={s*0.58} y1={s*0.72} x2={s*0.72} y2={s*0.55} stroke={stroke} strokeWidth={sw*0.7}/></svg>
    case 'phone':
      return <svg {...props}><rect x={s*0.28} y={s*0.08} width={s*0.44} height={s*0.84} rx={s*0.08} stroke={stroke} strokeWidth={sw}/><line x1={s*0.4} y1={s*0.14} x2={s*0.6} y2={s*0.14} stroke={stroke} strokeWidth={sw}/><circle cx={s*0.5} cy={s*0.86} r={s*0.04} stroke={stroke} strokeWidth={sw*0.8}/></svg>
    case 'lightning':
      return <svg {...props}><path d={`M${s*0.55},${s*0.1} L${s*0.35},${s*0.5} L${s*0.5},${s*0.5} L${s*0.45},${s*0.9} L${s*0.65},${s*0.5} L${s*0.5},${s*0.5} Z`} stroke={stroke} strokeWidth={sw} strokeLinejoin="round"/></svg>
    case 'triangle':
      return <svg {...props}><path d={`M${s*0.5},${s*0.1} L${s*0.88},${s*0.85} L${s*0.12},${s*0.85} Z`} stroke={stroke} strokeWidth={sw} strokeLinejoin="round"/></svg>
    case 'infinity':
      return <svg {...props}><path d={`M${s*0.3},${s/2} Q${s*0.2},${s*0.25} ${s*0.5},${s/2} Q${s*0.8},${s*0.75} ${s*0.7},${s/2} Q${s*0.6},${s*0.25} ${s*0.5},${s/2} Q${s*0.4},${s*0.75} ${s*0.3},${s/2}`} stroke={stroke} strokeWidth={sw} strokeLinecap="round" fill="none"/></svg>
    case 'gear':
      return <svg {...props}><circle cx={s/2} cy={s/2} r={s*0.22} stroke={stroke} strokeWidth={sw}/>{[0,45,90,135,180,225,270,315].map((angle) => {
        const rad = angle * Math.PI / 180
        const ix = s/2 + s*0.22*Math.cos(rad)
        const iy = s/2 + s*0.22*Math.sin(rad)
        const ox = s/2 + s*0.4*Math.cos(rad)
        const oy = s/2 + s*0.4*Math.sin(rad)
        return <line key={angle} x1={ix} y1={iy} x2={ox} y2={oy} stroke={stroke} strokeWidth={sw*1.2} strokeLinecap="round"/>
      })}</svg>
    default:
      return null
  }
}

export default function BackgroundDoodles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {doodleElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: el.x, top: el.y }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: el.delay, duration: 1 }}
        >
          <motion.div
            animate={{
              y: [0, -12, -4, 0],
              rotate: [el.rotate, el.rotate + 3, el.rotate - 2, el.rotate],
            }}
            transition={{
              duration: 5 + i * 0.7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: el.delay,
            }}
          >
            <DoodleSvg type={el.type} size={el.size} />
          </motion.div>
        </motion.div>
      ))}

      {/* Dashed curved paths across page */}
      <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
        <path d="M-50,200 Q200,100 400,250 Q600,400 800,200 Q1000,50 1200,300 Q1350,400 1490,200"
          stroke="#2B2B2B" strokeWidth="2" strokeDasharray="12 8" fill="none"/>
        <path d="M-50,600 Q300,500 600,650 Q900,780 1200,600 Q1350,520 1490,700"
          stroke="#2B2B2B" strokeWidth="1.5" strokeDasharray="8 12" fill="none"/>
        <path d="M200,900 Q400,700 700,800 Q1000,880 1300,750"
          stroke="#C4A882" strokeWidth="1.5" strokeDasharray="6 10" fill="none"/>
      </svg>
    </div>
  )
}
