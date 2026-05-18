import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ResumePreviewLinkProps {
  className?: string
  label?: string
  compact?: boolean
}

const RESUME_URL = '/Kevin_Dave_Resume.pdf'

export default function ResumePreviewLink({ className = '', label = 'Preview Resume', compact = false }: ResumePreviewLinkProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.button
        type="button"
        className={className}
        style={{ textDecoration: 'none' }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setOpen(true)}
      >
        {label}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100000] flex items-center justify-center p-4"
            style={{ background: 'rgba(43,43,43,0.55)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="sketch-card w-full max-w-5xl overflow-hidden"
              style={{ background: 'var(--paper)' }}
              initial={{ scale: 0.92, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 24 }}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 p-4" style={{ borderBottom: '1.5px solid rgba(43,43,43,0.2)' }}>
                <div>
                  <p className="font-sketch text-2xl text-pencil">Resume Preview</p>
                  {!compact && <p className="font-hand text-lg text-graphite">Review it first, then download if needed.</p>}
                </div>
                <div className="flex gap-2">
                  <a href={RESUME_URL} download className="sketch-btn primary magnetic-btn text-sm" style={{ textDecoration: 'none' }}>
                    Download
                  </a>
                  <button type="button" className="sketch-btn magnetic-btn text-sm" onClick={() => setOpen(false)}>
                    Close
                  </button>
                </div>
              </div>
              <iframe
                title="Kevin Dave Resume Preview"
                src={RESUME_URL}
                className="w-full bg-white"
                style={{ height: '75vh', border: 0 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
