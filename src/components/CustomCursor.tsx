import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TrailPoint {
  id: number
  x: number
  y: number
}

export default function CustomCursor() {
  const pencilRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [trails, setTrails] = useState<TrailPoint[]>([])
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [tilt, setTilt] = useState(0)
  const lastPos = useRef({ x: 0, y: 0 })
  const trailId = useRef(0)

  useEffect(() => {
    let animFrame = 0

    const move = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY

      // Update cursor position
      if (pencilRef.current) {
        pencilRef.current.style.left = x + 'px'
        pencilRef.current.style.top = y + 'px'
      }
      if (dotRef.current) {
        dotRef.current.style.left = x + 'px'
        dotRef.current.style.top = y + 'px'
      }

      // Tilt based on movement
      const dx = x - lastPos.current.x
      const newTilt = Math.max(-25, Math.min(25, dx * 1.5))
      setTilt(newTilt)
      lastPos.current = { x, y }

      // Add trail particle
      if (Math.abs(dx) > 3 || Math.abs(e.clientY - lastPos.current.y) > 3) {
        const id = trailId.current++
        setTrails(prev => [...prev.slice(-8), { id, x, y }])
        setTimeout(() => {
          setTrails(prev => prev.filter(t => t.id !== id))
        }, 600)
      }
    }

    const handleHoverIn = () => setIsHovering(true)
    const handleHoverOut = () => setIsHovering(false)
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    document.addEventListener('mousemove', move)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    const interactiveEls = document.querySelectorAll('a, button, [role="button"], .magnetic-btn')
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', handleHoverIn)
      el.addEventListener('mouseleave', handleHoverOut)
    })

    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      cancelAnimationFrame(animFrame)
    }
  }, [])

  return (
    <>
      {/* Pencil cursor */}
      <div
        ref={pencilRef}
        className="cursor-pencil"
        style={{
          transform: `translate(-50%, -50%) rotate(${tilt + 90}deg) scale(${isClicking ? 0.85 : isHovering ? 1.2 : 1})`,
          transition: 'transform 0.15s ease',
        }}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Pencil body */}
          <rect x="10" y="2" width="8" height="18" rx="1.5" fill="#FAF8F2" stroke="#2B2B2B" strokeWidth="1.5"/>
          {/* Pencil tip */}
          <polygon points="10,20 18,20 14,27" fill="#C4A882" stroke="#2B2B2B" strokeWidth="1.2"/>
          {/* Pencil eraser */}
          <rect x="10" y="2" width="8" height="5" rx="1.5" fill="#C97B7B" stroke="#2B2B2B" strokeWidth="1.2"/>
          {/* Eraser band */}
          <line x1="10" y1="7" x2="18" y2="7" stroke="#2B2B2B" strokeWidth="1.2"/>
          {/* Pencil tip point */}
          <circle cx="14" cy="26" r="1" fill="#2B2B2B"/>
          {/* Wood shaving lines */}
          <line x1="12" y1="20" x2="13.5" y2="25.5" stroke="#A08060" strokeWidth="0.8" opacity="0.6"/>
          <line x1="16" y1="20" x2="14.5" y2="25.5" stroke="#A08060" strokeWidth="0.8" opacity="0.6"/>
        </svg>
      </div>

      {/* Click ripple */}
      <AnimatePresence>
        {isClicking && (
          <motion.div
            key="ripple"
            style={{
              position: 'fixed',
              left: lastPos.current.x,
              top: lastPos.current.y,
              pointerEvents: 'none',
              zIndex: 99996,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 2.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke="#2B2B2B" strokeWidth="1.5" strokeDasharray="4 3"/>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trail particles */}
      {trails.map(t => (
        <div
          key={t.id}
          className="trail-particle"
          style={{ left: t.x, top: t.y }}
        />
      ))}
    </>
  )
}
