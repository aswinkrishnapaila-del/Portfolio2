import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'

import { certifications, education, honors, site, skills } from '../../data/site'
import { Lines, Parallax, Reveal } from '../components/motion'

export function About() {
  return (
    <article className="mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 sm:pt-36">
      <Lines as="h1" className="font-display text-balance text-[clamp(44px,7.5vw,112px)]" lines={['Student, developer,', 'and a builder of', 'useful things']} />
      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        <Reveal>
          <Parallax src="/images/about.jpg" alt="A laptop, a phone and a notebook on a desk" className="aspect-[3/4] rounded-image" strength={6} />
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="link-draw inline-flex items-center gap-1 text-muted hover:text-fg">
                  {s.label}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
          <Link to="/resume" className="link-draw mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium">
            Full résumé
            <ArrowUpRight className="size-3.5" />
          </Link>
        </Reveal>
        <div>
          <Reveal className="text-pretty text-[19px] leading-relaxed sm:text-[22px]">
            <p>
              I am a B.Tech student in Computer Science and Engineering at MVGR College of Engineering, Vizianagaram. Most of what I know came from building things that had to actually work.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex flex-col gap-5 text-[17px] leading-relaxed text-muted">
            <p>
              That started with LastHope, an emergency app where a slow screen or a missed alert is not an inconvenience but a failure. It taught me more about state, permissions, sensors and background services than any tutorial could, and it set the bar for everything since: does this hold up when someone is relying on it?
            </p>
            <p>
              ResuScan AI went the other way, into LLMs, document parsing and a full-stack deployment. Between them I have worked across Flutter and Dart, React and React Native, FastAPI and Node.js, with Supabase, PostgreSQL and MongoDB holding the data. I like owning the whole thing, from the first screen to the server it runs on.
            </p>
            <p>
              I am looking for internships and freelance work where the software has to be dependable, and where I can learn from people who have shipped more than I have.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-16">
            <h2 className="text-[14px] text-muted">Education</h2>
            <ol className="mt-4 divide-y divide-line border-y border-line">
              {education.map((e) => (
                <li key={e.title} className="grid gap-1 py-5 sm:grid-cols-[160px_1fr]">
                  <span className="text-[14px] tabular-nums text-faint">{e.period}</span>
                  <span>
                    <span className="block text-[16px] font-medium">{e.title}</span>
                    <span className="block text-[14.5px] text-muted">{e.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.18} className="mt-16">
            <h2 className="text-[14px] text-muted">Skills</h2>
            <dl className="mt-4 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {skills.map((s) => (
                <div key={s.group} className="border-t border-line pt-3">
                  <dt className="text-[13px] text-faint">{s.group}</dt>
                  <dd className="mt-1.5 text-[15px] leading-relaxed">{s.items.join(', ')}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.2} className="mt-16">
            <h2 className="text-[14px] text-muted">Certifications</h2>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {certifications.map((c) => (
                <li key={c.title} className="py-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <p className="text-[16px] font-medium">{c.title}</p>
                    <p className="text-[13px] tabular-nums text-faint">{c.date}</p>
                  </div>
                  <p className="mt-1 text-[14.5px] leading-relaxed text-muted">{c.focus}</p>
                  <p className="mt-1 text-[13px] text-faint">{c.issuer}</p>
                  {c.credentials && <p className="mt-1 break-all text-[12.5px] text-faint">Credential ID {c.credentials.join(' · ')}</p>}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.22} className="mt-16">
            <h2 className="text-[14px] text-muted">Competitions and honours</h2>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {honors.map((h) => (
                <li key={h.title} className="py-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <p className="text-[16px] font-medium">{h.title}</p>
                    <p className="text-[13px] tabular-nums text-faint">{h.date}</p>
                  </div>
                  <p className="mt-1 text-[14.5px] leading-relaxed text-muted">{h.detail}</p>
                  <p className="mt-1 text-[13px] text-faint">{h.issuer}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.25} className="mt-16 grid grid-cols-3 gap-6">
            {[
              ['8.5', 'CGPA'],
              ['2', 'apps shipped'],
              ['6', 'credentials and honours'],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-[52px] leading-none sm:text-[72px]">{value}</p>
                <p className="mt-2 text-[14px] text-muted">{label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </article>
  )
}
