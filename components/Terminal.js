import { ansi } from '@/lib/gruvbox-palette'

// Gruvbox bright red / yellow / green in place of the macOS traffic lights
const DOTS = [ansi[9], ansi[11], ansi[10]]

// Window chrome around featured content: titlebar with dots and a centred title
export function Terminal({ title, children, className = '', bodyClassName = '' }) {
  return (
    <div className={`term ${className}`.trim()}>
      <div className="term-titlebar">
        <div className="flex shrink-0 gap-2" aria-hidden="true">
          {DOTS.map((color) => (
            <span key={color} className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
          ))}
        </div>
        <p className="term-title">{title}</p>
      </div>
      <div className={`term-body ${bodyClassName}`.trim()}>{children}</div>
    </div>
  )
}

// The 16 gruvbox-dark-hard terminal colors: the site's signature motif.
// `wrap` stacks them 8 + 8 below sm, the way terminals print normal and bright rows.
export function PaletteStrip({ className = '', labels = false, wrap = false }) {
  const cols = wrap
    ? 'grid-cols-8 sm:grid-cols-[repeat(16,minmax(0,1fr))]'
    : 'grid-cols-[repeat(16,minmax(0,1fr))]'

  return (
    <div className={`grid ${cols} ${className}`.trim()} aria-hidden="true">
      {ansi.map((color, i) => (
        <span
          key={color}
          className={`flex items-end ${labels ? 'border-r border-black/20' : ''}`.trim()}
          style={{ background: color }}
        >
          {labels && (
            <span
              className="px-1.5 pb-1 text-[0.625rem] font-bold"
              style={{ color: i === 0 || i === 8 ? ansi[15] : ansi[0] }}
            >
              {i}
            </span>
          )}
        </span>
      ))}
    </div>
  )
}
