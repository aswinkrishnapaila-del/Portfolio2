// Everything about you lives here. The pages read from this file.

export const site = {
  name: 'Paila Aswin Krishna',
  shortName: 'Aswin Krishna',
  role: 'Full-stack and Flutter developer',
  location: 'Visakhapatnam',
  timezone: 'Asia/Kolkata',
  email: 'aswinwork012@gmail.com',
  phone: '+91 7989106819',
  phoneHref: '+917989106819',
  availability: 'Open to internships and freelance work',
  intro:
    'Full-stack and Flutter developer, studying computer science at MVGR College of Engineering. I build the screen someone taps in a hurry, the API behind it and the model that makes it useful.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/aswinkrishnapaila-del' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aswin-krishna-del' },
    { label: 'Email', href: 'mailto:aswinwork012@gmail.com' },
    { label: 'Phone', href: 'tel:+917989106819' },
  ],
  marquee: ['Flutter', 'React', 'Python', 'FastAPI', 'Supabase', 'PyTorch', 'MongoDB'],
}

export interface Project {
  slug: string
  title: string
  client: string
  category: string
  year: string
  cover: string
  tint: string
  summary: string
  role: string[]
  deliverables: string[]
  link?: string
  linkLabel?: string
  heroFit?: 'cover' | 'contain'
  heroZoom?: number
  heroStrength?: number
  body: string[]
  size: 'large' | 'small'
}

export const projects: Project[] = [
  {
    slug: 'lasthope',
    title: 'LastHope',
    client: 'Personal project',
    category: 'Mobile app',
    year: '2026',
    cover: '/images/lasthope.webp',
    tint: '#2a1111',
    summary:
      'A Flutter app that turns a phone into an emergency response system: one tap sends the message, starts the calls, shares the location and sounds the alarm.',
    role: ['Flutter', 'Dart', 'Node.js', 'Socket.IO', 'Google Maps SDK'],
    deliverables: ['One-tap SOS', 'Live location sharing', 'Fall detection', 'Real-time chat', 'Strobe and siren alerts'],
    link: 'https://github.com/aswinkrishnapaila-del/LastHope-2',
    linkLabel: 'View the source',
    heroFit: 'contain',
    heroZoom: 1,
    heroStrength: 0,
    body: [
      'LastHope started from an uncomfortable question: how many taps does it take to ask for help? On most phones it is five or six, and in an emergency your hands are shaking. This app makes it one.',
      'A single tap starts the whole chain. A pre-written distress SMS goes out to every trusted contact, priority calls open straight away, live GPS coordinates stream to a map they can follow, and the phone turns into a strobe light and a max-volume siren. No typing, no unlocking, no decisions to make.',
      'The parts I am proudest of are the ones nobody sees. Fall detection watches the accelerometer and gyroscope for sudden impacts and starts the protocol on its own, reaching 95% accuracy in testing. A Node.js and Socket.IO backend carries a real-time chat so contacts can coordinate while help is on the way. The strobe and siren made the phone roughly three times easier to spot in the dark, and the chat cut the back-and-forth that usually eats the first minute of an emergency by half.',
    ],
    size: 'small',
  },
  {
    slug: 'resuscan-ai',
    title: 'ResuScan AI',
    client: 'Personal project',
    category: 'AI product',
    year: '2026',
    cover: '/images/resuscan.webp',
    tint: '#141024',
    summary:
      'A full-stack career tool that scores a résumé against a job description, rewrites it with AI and exports an ATS-friendly PDF.',
    role: ['React', 'Vite', 'FastAPI', 'Groq API', 'Supabase'],
    deliverables: ['ATS scanner', 'Résumé builder, 14 templates', 'Job description matcher', 'Interview prep', 'PDF export'],
    link: 'https://resu-scan-ai.vercel.app',
    linkLabel: 'Visit the live app',
    heroZoom: 1,
    heroStrength: 0,
    body: [
      'Job applications are a numbers game played blind. ResuScan AI makes the process legible: upload a résumé, paste a job description, and get an ATS score with the specific lines that are costing you interviews.',
      'The scanner reads PDF, DOCX and scanned images, with PyPDF2 and Tesseract handling the bad scans, then sends the text to Groq models through a FastAPI backend. The builder goes the other way: 14 ATS-friendly templates with a live preview, AI bullet rewrites and a pixel-accurate PDF export.',
      'There is also a job matcher that maps detected skills to roles with LinkedIn and Naukri search links, and an interview prep mode with timed mock tests. Authentication and saved drafts run on Supabase; the front end is React and Vite on Vercel, with the API deployed separately on Render.',
    ],
    size: 'large',
  },
]

export const bySlug = (slug: string) => projects.find((p) => p.slug === slug)

export const services = [
  {
    title: 'Full-stack web',
    body: 'React on the front, FastAPI or Node.js behind it, with Supabase, PostgreSQL or MongoDB holding the data. Authentication, APIs and a deployment that stays up.',
  },
  {
    title: 'Flutter and mobile',
    body: 'Dart and Flutter, plus React Native, Firebase and the native plumbing underneath: background services, sensors, maps and the small things that make an app feel instant.',
  },
  {
    title: 'AI and data',
    body: 'Python, PyTorch, Pandas and NumPy, LLM APIs and the unglamorous pipelines around them: PDF extraction, OCR, prompt design and making a model’s output usable.',
  },
  {
    title: 'Cloud and delivery',
    body: 'Vercel, Cloudflare, Render and Netlify for shipping, GitHub and Playwright for keeping it honest, Twilio for the calls and messages that have to arrive.',
  },
]

export const certifications = [
  {
    title: 'Model Context Protocol (Intro & Advanced)',
    issuer: 'Anthropic',
    date: 'Sep 2026',
    focus: 'Agentic AI architectures, tool and API integration, security, and state management.',
  },
  {
    title: 'MongoDB Schema Design Patterns & Core Architecture',
    issuer: 'MongoDB',
    date: 'Sep 2026',
    focus: 'NoSQL data modeling, SQL-to-document migration, CRUD operations and query optimisation.',
    credentials: ['4abee2d0-b984-4138-ba83-bf90d5d45b45', 'f55834f3-a2d7-4427-a80b-281e7a7d06f7'],
  },
  {
    title: 'User Experience Design Fundamentals',
    issuer: 'IBM',
    date: 'Sep 2026',
    focus: 'UX research, usability principles and interface design fundamentals.',
  },
  {
    title: 'Google Prompting Essentials & AI Productivity',
    issuer: 'Google',
    date: 'Jun 2026',
    focus: 'Structured prompt engineering and generative AI workflows.',
    credentials: ['OABC9HDS0AF0', '56BTPWPAKGQ6'],
  },
]

export const honors = [
  {
    title: 'Devengers Tech Quiz — Certificate of Excellence',
    issuer: 'Devengers',
    date: 'Oct 2026',
    detail: 'Recognised for technical problem-solving and computer science fundamentals.',
  },
  {
    title: 'TVS Credit E.P.I.C 8.0 — IT Challenge',
    issuer: 'TVS Credit Services Ltd.',
    date: 'Sep 2026',
    detail: 'Competed as part of Team Marvel (MVGR College of Engineering) on real-world fintech and IT challenges.',
  },
]

/** Certifications and honours flattened for the rotating card on the home page. */
export const credentials = [
  ...certifications.map((c) => ({ title: c.title, detail: c.focus, source: `${c.issuer} · ${c.date}` })),
  ...honors.map((h) => ({ title: h.title, detail: h.detail, source: `${h.issuer} · ${h.date}` })),
]

export const education = [
  {
    period: '2024 to 2028',
    title: 'B.Tech, Computer Science and Engineering',
    detail: 'MVGR College of Engineering, Vizianagaram · CGPA 8.5',
  },
  {
    period: '2022 to 2024',
    title: 'Intermediate, MPC',
    detail: 'FIITJEE, Visakhapatnam · 77.5%',
  },
]

export const skills = [
  { group: 'Languages', items: ['Python', 'C', 'C++', 'Java', 'Dart', 'SQL', 'HTML5'] },
  { group: 'Frontend and mobile', items: ['React', 'React Native', 'Flutter', 'Tailwind CSS', 'jQuery', 'Figma'] },
  { group: 'Backend and data', items: ['FastAPI', 'Node.js', 'JWT', 'Supabase', 'PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase'] },
  { group: 'Cloud and tooling', items: ['Vercel', 'Cloudflare', 'Render', 'Netlify', 'Heroku', 'GitHub', 'Playwright', 'Twilio'] },
  { group: 'AI and data science', items: ['PyTorch', 'NumPy', 'Pandas', 'Matplotlib', 'LLMs', 'Groq API', 'Tesseract OCR'] },
]
