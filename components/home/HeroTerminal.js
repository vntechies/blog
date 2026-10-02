import { useState } from 'react'
import Link from '@/components/Link'
import { Terminal } from '@/components/Terminal'
import { ansi } from '@/lib/gruvbox-palette'

// "VN" as a pixel bitmap: box-drawing ASCII art depends on font coverage, divs do not
const LOGO = ['X...X.X...X', 'X...X.XX..X', 'X...X.X.X.X', '.X.X..X..XX', '..X...X...X']

function PixelLogo() {
  return (
    <div
      className="hidden shrink-0 grid-cols-[repeat(11,0.625rem)] self-start sm:grid"
      style={{ filter: `drop-shadow(3px 3px 0 ${ansi[1]})` }}
      aria-hidden="true"
    >
      {LOGO.join('')
        .split('')
        .map((cell, i) => (
          <span key={i} className={`h-2.5 w-2.5 ${cell === 'X' ? 'bg-orange-400' : ''}`} />
        ))}
    </div>
  )
}

// Course names cycle through the Gruvbox hues so each row reads as its own token
const HUES = ['text-orange-400', 'text-cyan-400', 'text-purple-400', 'text-blue-400']

const TABS = [
  { id: 'neofetch', label: 'neofetch' },
  { id: 'courses', label: 'ls ./courses' },
]

function Neofetch({ stats }) {
  return (
    <div className="flex gap-6">
      <PixelLogo />
      <div className="min-w-0 flex-1 text-sm">
        <p>
          <span className="font-bold text-orange-400">học-viên</span>
          <span className="text-fg-subtle">@</span>
          <span className="font-bold text-orange-400">vntechies</span>
        </p>
        <p className="text-fg-subtle" aria-hidden="true">
          ────────────────────
        </p>
        <dl className="space-y-0.5">
          {stats.map(({ label, value }) => (
            <div key={label} className="flex flex-wrap gap-x-2">
              <dt className="font-bold text-yellow-400">{label}:</dt>
              <dd className="tabular-nums text-fg">{value}</dd>
            </div>
          ))}
          <div className="flex flex-wrap gap-x-2">
            <dt className="font-bold text-yellow-400">Lộ trình:</dt>
            <dd>AWS · DevOps · Data</dd>
          </div>
          <div className="flex flex-wrap gap-x-2">
            <dt className="font-bold text-yellow-400">Lab:</dt>
            <dd>miễn phí, nền tảng riêng</dd>
          </div>
        </dl>
        <div className="mt-4 grid w-fit grid-cols-8" aria-hidden="true">
          {ansi.map((color) => (
            <span key={color} className="h-4 w-6 sm:w-7" style={{ background: color }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function CourseListing({ courses }) {
  return (
    <div className="text-sm">
      <p className="text-fg-subtle">total {courses.length}</p>
      <ul className="mt-1 space-y-1">
        {courses.map((course, i) => (
          <li key={course.href}>
            <Link
              href={course.href}
              className="group grid grid-cols-[auto,1fr] gap-x-3 py-0.5 hover:bg-fg/5"
            >
              <span className="hidden text-fg-subtle sm:inline">drwxr-xr-x</span>
              <span className="min-w-0">
                <span className={`font-bold ${HUES[i % HUES.length]}`}>
                  {course.label.toLowerCase().replace(/\s+/g, '-')}/
                </span>
                <span className="block truncate text-fg-muted group-hover:text-fg">
                  {course.title}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function HeroTerminal({ stats, courses }) {
  const [tab, setTab] = useState('neofetch')
  const command = tab === 'neofetch' ? 'neofetch' : 'ls -la ./courses'

  return (
    <div className="min-w-0">
      <div className="mb-3 flex gap-2" role="tablist" aria-label="Terminal">
        {TABS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            id={`hero-tab-${id}`}
            aria-selected={tab === id}
            aria-controls="hero-terminal-panel"
            className="term-tab"
            onClick={() => setTab(id)}
          >
            {label}
          </button>
        ))}
      </div>
      {/* Always gruvbox-dark-hard, whatever the page theme: .dark rescopes the tokens */}
      <Terminal title="vntechies — zsh — 80×24" className="dark" bodyClassName="min-h-[20rem]">
        <div id="hero-terminal-panel" role="tabpanel" aria-labelledby={`hero-tab-${tab}`}>
          <p className="mb-3 text-sm">
            <span className="text-cyan-400">~/vntechies</span>{' '}
            <span className="term-prompt">{command}</span>
          </p>
          {tab === 'neofetch' ? <Neofetch stats={stats} /> : <CourseListing courses={courses} />}
          <p className="mt-4 text-sm">
            <span className="text-cyan-400">~/vntechies</span>{' '}
            <span className="text-success">$</span>{' '}
            <span className="term-cursor" aria-hidden="true" />
          </p>
        </div>
      </Terminal>
    </div>
  )
}
