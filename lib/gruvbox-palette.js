// Gruvbox (dark hard + light hard) as full Tailwind color scales.
// Every legacy color family (gray, orange, purple, blue, ...) is remapped onto one of
// the eight Gruvbox hues, so the ~2,000 hard-coded utility classes across the course
// pages render in the palette without touching their markup.

// The 16 terminal colors of gruvbox-dark-hard, in ANSI order
const ansi = [
  '#1d2021',
  '#cc241d',
  '#98971a',
  '#d79921',
  '#458588',
  '#b16286',
  '#689d6a',
  '#a89984',
  '#928374',
  '#fb4934',
  '#b8bb26',
  '#fabd2f',
  '#83a598',
  '#d3869b',
  '#8ec07c',
  '#ebdbb2',
]

const LIGHT_BG = '#f9f5d7'
const DARK_BG = '#1d2021'

const hex = (h) =>
  h
    .replace('#', '')
    .match(/../g)
    .map((x) => parseInt(x, 16))
const toHex = (rgb) => '#' + rgb.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('')
// amount = share of `a` in the result
const mix = (a, b, amount) => {
  const [ra, rb] = [hex(a), hex(b)]
  return toHex(ra.map((v, i) => v * amount + rb[i] * (1 - amount)))
}

// faded = Gruvbox light-theme variant, normal = base, bright = dark-theme variant.
// 600 is the faded tone so light-mode text stays AA; 300/400 are for dark-mode text.
const scale = (faded, normal, bright) => ({
  50: mix(bright, LIGHT_BG, 0.12),
  100: mix(bright, LIGHT_BG, 0.22),
  200: mix(bright, LIGHT_BG, 0.42),
  300: mix(bright, '#fbf1c7', 0.72),
  400: bright,
  500: normal,
  600: faded,
  700: mix(faded, DARK_BG, 0.8),
  800: mix(faded, DARK_BG, 0.6),
  900: mix(normal, DARK_BG, 0.32),
  950: mix(normal, DARK_BG, 0.18),
})

const neutral = {
  50: '#fbf1c7',
  100: '#f2e5bc',
  200: '#ebdbb2',
  300: '#d5c4a1',
  400: '#bdae93',
  500: '#928374',
  600: '#665c54',
  700: '#504945',
  800: '#3c3836',
  900: '#282828',
  950: '#1d2021',
}

const red = scale('#9d0006', '#cc241d', '#fb4934')
const green = scale('#79740e', '#98971a', '#b8bb26')
const yellow = scale('#b57614', '#d79921', '#fabd2f')
const blue = scale('#076678', '#458588', '#83a598')
const purple = scale('#8f3f71', '#b16286', '#d3869b')
const aqua = scale('#427b58', '#689d6a', '#8ec07c')
const orange = scale('#af3a03', '#d65d0e', '#fe8019')

const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  inherit: 'inherit',
  black: DARK_BG,
  white: '#fbf1c7',
  gray: neutral,
  slate: neutral,
  zinc: neutral,
  neutral,
  stone: neutral,
  red,
  rose: red,
  orange,
  amber: yellow,
  yellow,
  lime: green,
  green,
  emerald: green,
  teal: aqua,
  cyan: aqua,
  sky: blue,
  blue,
  indigo: blue,
  violet: purple,
  purple,
  fuchsia: purple,
  pink: purple,
}

module.exports = { ansi, colors }
