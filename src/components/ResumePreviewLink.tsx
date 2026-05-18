import { motion } from 'framer-motion'

interface ResumePreviewLinkProps {
  className?: string
  label?: string
  compact?: boolean
}

const RESUME_URL = '/Kevin_Dave_Resume.pdf'

export default function ResumePreviewLink({ className = '', label = 'Preview Resume', compact = false }: ResumePreviewLinkProps) {
  return (
    <motion.a
      href={RESUME_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={compact ? 'Open resume preview in a new tab' : undefined}
      className={className}
      style={{ textDecoration: 'none' }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
    >
      {label}
    </motion.a>
  )
}
