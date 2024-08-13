const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// You might need to insert additional domains in script-src if you are using external services
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' 
    https://*.google.com 
    https://*.googleapis.com 
    https://*.googletagmanager.com 
    https://*.google-analytics.com 
    https://*.doubleclick.net 
    https://*.googleadservices.com 
    https://*.googlesyndication.com 
    https://fundingchoicesmessages.google.com 
    https://adservice.google.com 
    https://pagead2.googlesyndication.com 
    https://partner.googleadservices.com 
    https://tpc.googlesyndication.com 
    https://www.googletagservices.com 
    giscus.app 
    https://utteranc.es;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.googlesyndication.com;
  img-src * data: blob:;
  media-src 'self' https://*.googlesyndication.com;
  connect-src * https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.googlesyndication.com https://*.doubleclick.net;
  font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com;
  frame-src 'self' 
    https://*.google.com 
    https://*.doubleclick.net 
    https://googleads.g.doubleclick.net 
    https://tpc.googlesyndication.com 
    https://www.youtube.com 
    https://fundingchoicesmessages.google.com 
    giscus.app 
    https://utteranc.es;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  child-src https://*.google.com https://*.googlesyndication.com;
  worker-src 'self' blob: https://*.googlesyndication.com;
`

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

module.exports = withBundleAnalyzer({
  distDir: 'out',
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
    [
      '@fullhuman/postcss-purgecss',
      {
        content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: ['html', 'body'],
      },
    ],
  ],
  images: {
    domains: [
      'platform-lookaside.fbsbx.com',
      'avatars.githubusercontent.com',
      'raw.githubusercontent.com',
      'images.unsplash.com',
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    path: '/_next/image',
    loader: 'default',
  },
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    if (!dev && !isServer) {
      // Replace React with Preact only in client production build
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    return config
  },
})
