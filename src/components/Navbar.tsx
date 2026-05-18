import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ResumePreviewLink from './ResumePreviewLink'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className="sketch-nav"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      style={{ boxShadow: scrolled ? '0 2px 20px rgba(43,43,43,0.06)' : 'none' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="font-sketch text-2xl font-bold text-pencil no-underline flex items-center gap-2"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          whileHover={{ scale: 1.04 }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="12" y="2" width="8" height="20" rx="1.5" fill="#FAF8F2" stroke="#2B2B2B" strokeWidth="1.5"/>
            <polygon points="12,22 20,22 16,30" fill="#C4A882" stroke="#2B2B2B" strokeWidth="1.2"/>
            <rect x="12" y="2" width="8" height="5" rx="1.5" fill="#C97B7B" stroke="#2B2B2B" strokeWidth="1.2"/>
            <line x1="12" y1="7" x2="20" y2="7" stroke="#2B2B2B" strokeWidth="1.2"/>
          </svg>
          <span>KEVIN</span>
        </motion.a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="font-sketch text-lg text-graphite hover:text-pencil relative group transition-colors duration-200 bg-transparent border-none cursor-none"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              whileHover={{ y: -2 }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pencil group-hover:w-full transition-all duration-300 rounded-full" />
            </motion.button>
          ))}
          <ResumePreviewLink className="sketch-btn magnetic-btn text-sm" label="Resume" compact />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-none bg-transparent border-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <motion.span
              key={i}
              className="block w-6 h-0.5 bg-pencil rounded-full"
              animate={menuOpen ? {
                rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
                y: i === 0 ? 8 : i === 2 ? -8 : 0,
                opacity: i === 1 ? 0 : 1,
              } : { rotate: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: menuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <div className="flex flex-col py-4 gap-3">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="font-sketch text-xl text-graphite hover:text-pencil text-left py-1 bg-transparent border-none cursor-none"
            >
              {link.label}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}
