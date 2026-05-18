import type { Project, Skill, Experience } from '../types'

export const ROLES = [
  'Full Stack Developer',
  'Flutter Developer',
  'Mobile App Developer',
  'Backend API Developer',
  'Problem Solver',
  'AI/ML Explorer',
]

export const BIO = `Hey! I'm Kevin Dave — a Computer Engineering student and software developer focused on full-stack web and mobile development. I build scalable Flutter, Next.js, Node.js, Firebase, Supabase, and database-backed applications with clean APIs and reliable user experiences.`

export const PROJECTS: Project[] = [
  {
    id: 'smart-shelf',
    title: 'Smart Shelf Monitoring System',
    description: 'AI-based smart shelf monitoring system using CCTV to track shelf status, detect gaps, and support smarter retail inventory visibility.',
    tags: ['AI', 'Computer Vision', 'Monitoring'],
    category: 'AI/ML',
    tech: ['Python', 'OpenCV', 'AI', 'CCTV'],
    github: 'https://github.com/virajwarhade/smart_shelf',
    featured: true,
  },
  {
    id: 'disaster-management',
    title: 'Real-Time Disaster Management System',
    description: 'Hackathon-winning disaster response platform with offline Wi-Fi SOS communication, AI analysis on drone and satellite data, IoT alerts, and live rescue dashboards.',
    tags: ['Full Stack', 'AI', 'IoT'],
    category: 'Full Stack',
    tech: ['Flutter', 'MERN', 'Redis', 'Docker', 'Kubernetes'],
    featured: true,
  },
  {
    id: 'oneflow',
    title: 'OneFlow',
    description: 'Project management and resource planning platform with task tracking, role-based access, timesheets, analytics dashboards, and scalable REST APIs.',
    tags: ['Full Stack', 'SaaS', 'Web'],
    category: 'Full Stack',
    tech: ['Next.js', 'PostgreSQL', 'Prisma ORM', 'REST APIs'],
    featured: true,
  },
  {
    id: 'quick-court',
    title: 'Quick Court',
    description: 'Sports court booking platform for badminton, cricket, and pickleball with scheduling, authentication, court availability management, and a companion Flutter app.',
    tags: ['Full Stack', 'Mobile', 'Booking'],
    category: 'Mobile',
    tech: ['Next.js', 'Flutter', 'PostgreSQL', 'Prisma ORM', 'REST APIs'],
    github: 'https://github.com/Kevin2508/quickcourt',
  },
  {
    id: 'streammart',
    title: 'StreamMart',
    description: 'MERN stack live shopping platform with real-time streaming, chat, product management, and role-based flows for admins, sellers, and customers.',
    tags: ['Full Stack', 'Real-time', 'Web'],
    category: 'Full Stack',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/Kevin2508/StreamMart',
  },
]

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'ReactJS', level: 90, category: 'Frontend' },
  { name: 'JavaScript', level: 88, category: 'Frontend' },
  { name: 'TypeScript', level: 82, category: 'Frontend' },
  { name: 'HTML/CSS', level: 92, category: 'Frontend' },
  // Backend
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'REST APIs', level: 84, category: 'Backend' },
  { name: 'Prisma ORM', level: 78, category: 'Backend' },
  // Mobile
  { name: 'Flutter', level: 93, category: 'Flutter' },
  { name: 'Dart', level: 90, category: 'Flutter' },
  // Databases
  { name: 'Firebase', level: 88, category: 'Databases' },
  { name: 'Supabase', level: 85, category: 'Databases' },
  { name: 'MongoDB', level: 82, category: 'Databases' },
  { name: 'PostgreSQL', level: 80, category: 'Databases' },
  // Languages
  { name: 'Java', level: 75, category: 'Languages' },
  { name: 'C/C++', level: 70, category: 'Languages' },
  { name: 'Python', level: 75, category: 'Languages' },
  // AI/ML kept lower priority
  { name: 'Machine Learning', level: 68, category: 'AI/ML' },
  { name: 'Computer Vision', level: 65, category: 'AI/ML' },
  // Tools & Design
  { name: 'Git/GitHub', level: 86, category: 'Tools' },
  { name: 'Figma', level: 76, category: 'Tools' },
  { name: 'Adobe Creative Suite', level: 72, category: 'Tools' },
]

export const EXPERIENCES: Experience[] = [
  {
    company: 'eSparkBiz Technologies',
    role: 'Software Developer Intern',
    period: 'Jan 2026 – Present',
    description: [
      'Contributing to real-world web and mobile application development',
      'Implementing scalable features and optimizing application performance',
      'Working across modern full-stack and mobile development workflows',
    ],
    type: 'work',
  },
  {
    company: 'GPHOOD TECH NIGAM PVT LTD',
    role: 'Flutter Developer Intern',
    period: 'May 2025 – Jun 2025',
    description: [
      'Engineered cross-platform Flutter features using Firebase Authentication and Firestore',
      'Improved app performance and UI responsiveness',
      'Collaborated with the team to design responsive mobile interfaces',
    ],
    type: 'work',
  },
  {
    company: 'CSI-GCET',
    role: 'Executive Member & Graphics Design Coordinator',
    period: 'Feb 2025 – Present',
    description: [
      'Boosted workshop participation by 40% through strategic marketing',
      'Managed technical events with 500+ attendees',
      'Supported campus-level technical and design initiatives',
    ],
    type: 'work',
  },
  {
    company: 'InnovAItion by Intuitive AI and DA-IICT',
    role: 'Hackathon Winner — Real-Time Disaster Management System',
    period: '2025',
    description: [
      'Built an offline SOS platform for victim–rescuer communication without cellular networks',
      'Used AI analysis on drone and satellite data to identify high-risk zones',
      'Integrated IoT sensors for early forest fire and gas leakage detection',
    ],
    type: 'achievement',
  },
  {
    company: 'Odoo x Amalthea IIT Gandhinagar Hackathon',
    role: 'Hackathon Project — OneFlow',
    period: '2025',
    description: [
      'Built a project management and resource planning platform',
      'Implemented task workflows, role-based access, timesheets, and analytics',
      'Optimized database schema for multi-project resource planning',
    ],
    type: 'achievement',
  },
  {
    company: 'Odoo Hackathon 2025',
    role: 'Finalist — Quick Court',
    period: '2025',
    description: [
      'Developed a sports court booking platform with date and time scheduling',
      'Implemented authentication, availability management, and booking workflows',
      'Built a companion Flutter app connected to the same backend',
    ],
    type: 'achievement',
  },
]

export const CONTACT = {
  email: 'kevindave1408@gmail.com',
  github: 'https://github.com/Kevin2508',
  linkedin: 'https://linkedin.com/in/kevin-dave-18674a312',
  portfolio: 'https://kevin-dave.vercel.app',
}
