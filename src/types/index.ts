export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  category: string
  tech: string[]
  github?: string
  live?: string
  featured?: boolean
}

export interface Skill {
  name: string
  level: number // 0-100
  category: string
}

export interface Experience {
  company: string
  role: string
  period: string
  description: string[]
  type: 'work' | 'education' | 'achievement'
}

export interface CursorState {
  x: number
  y: number
  isHovering: boolean
  isClicking: boolean
}
