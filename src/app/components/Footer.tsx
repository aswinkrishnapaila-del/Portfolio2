import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'

import { site } from '../../data/site'
import { Lines, Magnetic, Reveal } from './motion'
import { useLocalTime } from './Nav'

export function Footer() {
  const time = useLocalTime()

  const rows = [
    { label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { label: 'Phone', value: site.phone, href: site.phoneHref },
    { label: 'LinkedIn', value: 'in/aswin-krishna-del', href: 'https://www.linkedin.com/in/aswin-krishna-del' },
    { label: 'GitHub', value: '@aswinkrishnapaila-del', href: 'https://github.com/aswinkrishnapaila-del' },
  ]

  return (
    <footer id="contact" className="mt-32 border-t border-line sm:mt-44">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <div>
            <Lines as="h2" className="font-display text-[clamp(48px,8vw,120px)]" lines={['Let’s build', <>something <span className="text-accent">useful</span></>]} />
            <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Magnetic>
                <a href={`mailto:${site.email}`} className="inline-flex h-14 items-center gap-2 rounded-[16px] bg-fg px-7 text-[16px] font-medium text-bg transition-colors hover:bg-[#2b2925]">
                  {site.email}
                  <ArrowUpRight className="size-4" />
                </a>
              </Magnetic>
              <p className="text-[14px] text-muted">{site.availability}</p>
            </Reveal>
            <Reveal delay={0.25} className="mt-7">
              <Link to="/resume" className="link-draw inline-flex items-center gap-1.5 text-[15px] font-medium">
                Read the résumé
                <ArrowUpRight className="size-4" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="rounded-card bg-surface-2/60 p-7 sm:p-9">
              <p className="text-[13px] text-muted">Direct lines</p>
              <ul className="mt-5 border-y border-line">
                {rows.map((row) => (
                  <li key={row.label} className="border-b border-line last:border-0">
                    <a href={row.href} className="group flex items-baseline justify-between gap-4 py-4">
                      <span className="text-[13px] text-muted">{row.label}</span>
                      <span className="flex items-center gap-1.5 text-right text-[15px] transition-colors group-hover:text-accent">
                        {row.value}
                        <ArrowUpRight className="size-3.5 opacity-40" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[13px] leading-relaxed text-muted">Based in {site.location}, India. Usually replies the same day.</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-8 border-t border-line pt-8 text-[14px] sm:grid-cols-3">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="link-draw text-muted transition-colors hover:text-fg">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-faint sm:text-center">
            {site.location}, {time}
          </p>
          <p className="text-faint sm:text-right">© {new Date().getFullYear()} {site.name}</p>
        </div>
      </div>
    </footer>
  )
}
