import { ArrowLeft, Printer } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router'

import { certifications, education, honors, projects, site, skills } from '../../data/site'

const highlights: Record<string, string[]> = {
  lasthope: [
    'Built an automated emergency-response app in Flutter and Dart with one-tap SOS, priority calling, automatic SMS dispatch and live GPS tracking on Google Maps.',
    'Implemented fall detection from device motion sensors at 95% accuracy, plus a strobe and max-volume siren that made the user roughly three times easier to locate.',
    'Added a Node.js and Socket.IO real-time chat for coordination between contacts, cutting response time by 50%.',
  ],
  'resuscan-ai': [
    'Built an ATS résumé scanner and builder on React and Vite with a FastAPI backend, Groq LLM analysis, PyPDF2 and Tesseract extraction, and Supabase authentication.',
    'Shipped 14 ATS-friendly templates, AI bullet rewriting, job-description matching and pixel-accurate PDF export; live on Vercel with the API on Render.',
  ],
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-9">
      <h2 className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">{title}</h2>
      <div className="mt-3 border-t border-line pt-4">{children}</div>
    </section>
  )
}

export function Resume() {
  return (
    <article className="print-plain mx-auto max-w-[820px] px-5 pb-16 pt-28 sm:px-8 sm:pt-36">
      <div className="no-print flex items-center justify-between">
        <Link to="/" className="inline-flex h-9 items-center gap-1.5 text-[14px] text-muted transition-colors hover:text-fg">
          <ArrowLeft className="size-4" />
          Back to the portfolio
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex h-10 items-center gap-2 rounded-[12px] border border-line-strong px-4 text-[14px] font-medium transition-colors hover:border-fg hover:bg-fg hover:text-bg"
        >
          <Printer className="size-4" />
          Print or save as PDF
        </button>
      </div>

      <div className="mt-10 border-b border-fg pb-6">
        <h1 className="font-display text-[clamp(34px,6vw,52px)] uppercase tracking-[-0.02em]">{site.name}</h1>
        <p className="mt-3 text-[14px] text-muted">B.Tech Computer Science and Engineering · {site.location}, India</p>
        <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[13px]">
          <a href={`mailto:${site.email}`} className="link-draw">{site.email}</a>
          <span className="text-faint">·</span>
          <a href={site.phoneHref} className="link-draw">{site.phone}</a>
          <span className="text-faint">·</span>
          <a href="https://www.linkedin.com/in/aswin-krishna-del" className="link-draw">linkedin.com/in/aswin-krishna-del</a>
          <span className="text-faint">·</span>
          <a href="https://github.com/aswinkrishnapaila-del" className="link-draw">github.com/aswinkrishnapaila-del</a>
        </p>
      </div>

      <Section title="Education">
        <ul className="space-y-4">
          {education.map((e) => (
            <li key={e.title} className="grid gap-1 sm:grid-cols-[1fr_auto] sm:items-baseline">
              <div>
                <p className="text-[15px] font-medium">{e.title}</p>
                <p className="text-[13.5px] text-muted">{e.detail}</p>
              </div>
              <p className="text-[13px] tabular-nums text-faint">{e.period}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Skills">
        <dl className="space-y-2 text-[14px]">
          {skills.map((s) => (
            <div key={s.group} className="grid gap-1 sm:grid-cols-[170px_1fr]">
              <dt className="text-muted">{s.group}</dt>
              <dd>{s.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Projects">
        <ul className="space-y-7">
          {projects.map((project) => (
            <li key={project.slug}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-[15px] font-medium">
                  {project.title}
                  <span className="ml-2 text-[13px] font-normal text-muted">{project.role.join(' · ')}</span>
                </p>
                <a href={project.link} className="link-draw text-[13px] text-muted">{project.linkLabel ?? 'View'}</a>
              </div>
              <p className="mt-1 text-[13.5px] leading-relaxed text-muted">{project.summary}</p>
              <ul className="mt-2 space-y-1.5">
                {(highlights[project.slug] ?? []).map((line) => (
                  <li key={line} className="flex gap-2 text-[13.5px] leading-relaxed">
                    <span className="mt-[0.55em] size-1 shrink-0 rounded-full bg-accent" />
                    {line}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Certifications">
        <ul className="space-y-3">
          {certifications.map((c) => (
            <li key={c.title} className="text-[13.5px] leading-relaxed">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-medium">{c.title}</span>
                <span className="text-[12.5px] tabular-nums text-faint">{c.issuer} · {c.date}</span>
              </div>
              <span className="text-muted">{c.focus}</span>
              {c.credentials && <span className="mt-1 block break-all text-[12px] text-faint">Credential ID {c.credentials.join(' · ')}</span>}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Competitions and honours">
        <ul className="space-y-3">
          {honors.map((h) => (
            <li key={h.title} className="text-[13.5px] leading-relaxed">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-medium">{h.title}</span>
                <span className="text-[12.5px] tabular-nums text-faint">{h.issuer} · {h.date}</span>
              </div>
              <span className="text-muted">{h.detail}</span>
            </li>
          ))}
        </ul>
      </Section>
    </article>
  )
}
