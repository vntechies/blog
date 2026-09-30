# vntechies.dev – SEO & growth plan

Based on the production + repo audit of 2026-09-30. Work top to bottom: each step only depends on steps above it. Tick the boxes as you go.

How to ship a code phase: branch → `npm run lint && npm run build` → `npx serve@14 out` (local check) → push → check the Cloudflare Pages preview → merge → run the phase's "Done when" checks on production.

> Time-sensitive, optional: if the team attended AWS Cloud & AI Day Hanoi (2026-09-29), publish a recap this week. It loses value within days.

| When        | Phases      |
| ----------- | ----------- |
| Week 1      | 0, 1a, 1b   |
| Week 2      | 2, 3        |
| Week 3      | 4           |
| Weeks 3–6   | 5           |
| From week 4 | 6 (ongoing) |
| Monthly     | 7           |

## Baseline (2026-09-30)

| Metric                                                        | Value                                                                                                             |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Sitemap                                                       | 280 URLs, all 200, 0 `<lastmod>`                                                                                  |
| Lighthouse mobile, lab (home / DevOps guide)                  | Perf 59 / 60, LCP 10.5 s / 9.5 s, Best Practices 57, SEO 92                                                       |
| Page weight, DevOps guide                                     | 2.16 MB                                                                                                           |
| Free-course URLs with no link from home, `/courses`, nav      | 136 (49% of the sitemap)                                                                                          |
| Blog posts (44): no `authors` / no internal links / `lastmod` | 23 / 33 / 0                                                                                                       |
| Posts per year                                                | 2022: 14, 2023: 7, 2024: 9, 2025: 1, 2026: 2                                                                      |
| Email capture                                                 | none                                                                                                              |
| Fill in during Phase 0                                        | organic clicks 28d: … / non-brand: … / indexed pages: … / CWV mobile: … / `generate_lead` 28d: … / AdSense 28d: … |

---

## Phase 0 – Access and baseline (day 1, ~2 h, dashboards)

- [ ] 0.1 Google Search Console: make sure there is a Domain property (covers www + apex; DNS TXT via Cloudflare). Export Performance → queries + pages, last 3 months, to a sheet. Needed in 5.3, 5.7, 5.9. Note the mobile Core Web Vitals status (decides how hard to push Phase 3).
- [ ] 0.2 Bing Webmaster Tools: "Import from Google Search Console".
- [ ] 0.3 GA4: mark `generate_lead` as a key event. Link GA4 ↔ GSC (and Google Ads if used).
- [ ] 0.4 Write down AdSense revenue for the last 28 days (input for decision 4.2).
- [ ] 0.5 Cloudflare:
  - a. Find the Pages project's `*.pages.dev` URL. Does it serve the full site? (→ 2.2)
  - b. Security → Events, filter path contains `/_next/static/`. The audit saw 503s on prefetched chunks from a headless browser. (→ 2.4)

Done when: the baseline table is complete.

---

## Phase 1a – Head tags, crawl files, headers (1 PR, ~half day) — DONE 2026-10-01

> Implementation notes / deviations from the text below:
>
> - 1.4: kept the descriptive `title` (still the homepage + RSS `<title>`) and added a **new** `siteName: 'VNTechies'` field. `og:site_name` and the title suffixes now use `siteName`; making `title` itself a bare "VNTechies" would have weakened the homepage/RSS title. The homepage's own `<title>` is set in Phase 1b (index.js is edited there).
> - 1.9: `/pricing` (package grid, has the `#hoan-tien` / `#financial-aid` anchors every internal link uses) and `/docs/pricing` (detailed policy doc, orphaned — nothing links to it) are genuinely different pages. Rather than delete unverified content, `data/docs/pricing.mdx` now has `canonicalUrl: /pricing`; `DocumentLayout` renders `noindex` + `<link rel=canonical href=/pricing>` for it, the sitemap script already drops `canonicalUrl` pages, and `_redirects` 301s it.
> - Build note: `next build`'s lint gate is red on ~69 pre-existing Tailwind class-order prettier errors in untouched course/post layouts. Verified the build compiles and the sitemap regenerates with lint disabled; did not reformat unrelated files. Fix those separately or the PR's CI lint will fail.
> - Verified in `out/`: canonical drops `?utm` (browser dump), `404`/`docs/pricing` `noindex`, sitemap 228 URLs / 189 `<lastmod>` / 15 author pages / 66 thin tags dropped (12 tags with ≥3 posts kept), `docs/pricing` canonical → `/pricing`, `_headers` immutable cache, `_redirects` present, robots.txt feed `Disallow` removed. Production "Done when" checks still pending deploy.

- [x] 1.1 `components/SEO.js` → `CommonSEO`
  - Build URLs from the path without query/hash. Today canonical and `og:url` become `…?utm_source=…` / `…?fbclid=…` after hydration.
    ```js
    const url = `${siteMetadata.siteUrl}${router.asPath.split(/[?#]/)[0]}`
    // og:url → url, canonical → canonicalUrl || url
    ```
  - Add a `noindex = false` prop: `<meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow'} />`. Pass it through `PageSEO` and `TagSEO`.
  - `twitter:site` → `` `@${siteMetadata.twitter.split('/').pop()}` `` (= `@vn_techies`, today it is a URL).
  - `TagSEO`: build the RSS `href` from the same clean path.
  - `PageSEO`: optional `structuredData` prop that renders `<script type="application/ld+json">` (used in 1.10 and 5.1).
- [x] 1.2 `pages/404.js`: `<PageSEO … noindex showCanonical={false} description="…" />`. Today `/404` returns 200 with `index, follow` and canonical `/404`, and in the browser the canonical becomes the missing URL.
- [x] 1.3 `pages/_document.js`
  - `apple-mobile-web-app-title` → `VNTechies` (today `qmau.me`).
  - RSS link → `<link rel="alternate" type="application/rss+xml" title="VNTechies" href="/feed.xml" />` (today `/public/feed.xml`, a 404).
- [x] 1.4 Titles
  - `data/siteMetadata.js`: `title: 'VNTechies'`. It is the `og:site_name`, the RSS title and the title suffix on the about, author, career, register, pricing and docs pages (author titles are ~100 chars today).
  - `pages/index.js` (the `PageSEO` `title`): give the homepage its own title, e.g. `Khóa học AWS, DevOps, Data Engineer thực chiến | VNTechies`.
- [x] 1.5 `scripts/generate-sitemap.js`
  - Add `<lastmod>` for md/mdx from `fm.data.lastmod || fm.data.date` (declare `let lastmod` at the top of the map callback). Emit nothing for `pages/*.js`; don't fake dates.
  - Skip thin tags (same threshold as 1.6).
  - Add author pages: globs `'data/authors/*.md'`, `'!data/authors/default.md'` and `.replace('data/authors', '/authors')`.
    ```js
    if (
      page.startsWith('public/tags/') &&
      (fs.readFileSync(page, 'utf8').match(/<item>/g) || []).length < 3
    )
      return // …
    ;`<url><loc>${siteMetadata.siteUrl}${route}</loc>${
      lastmod ? `<lastmod>${new Date(lastmod).toISOString().slice(0, 10)}</lastmod>` : ''
    }</url>`
    ```
- [x] 1.6 `pages/tags/[tag].js`: pass `noindex={posts.length < 3}` to `TagSEO` (50 of 78 tags have a single post).
- [x] 1.7 Optional, small gain: `public/robots.txt` → delete `Disallow: /*feed.xml$`, then submit `/feed.xml` as a second sitemap in GSC. Keep the `Content-Signal` line (the Lighthouse −8 is cosmetic; Google ignores unknown lines).
- [x] 1.8 `public/_headers`: append (hashed build files are cached only 4 h today):

  ```
  /_next/static/*
    Cache-Control: public, max-age=31536000, immutable

  /static/*
    Cache-Control: public, max-age=604800
  ```

- [x] 1.9 Duplicate pricing page: compare `data/docs/pricing.mdx` with `pages/pricing.js`, move anything unique into `pages/pricing.js` (linked from the footer), delete the mdx, and create `public/_redirects`:
  ```
  /docs/pricing /pricing 301
  ```

Done when (on production):

```sh
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless=new --no-sandbox --disable-gpu --virtual-time-budget=15000 --dump-dom \
  "https://vntechies.dev/blog/devops/tro-thanh-devops-engineer?utm_source=test" | grep -o '<link rel="canonical"[^>]*>'  # no ?utm
curl -s https://vntechies.dev/404 | grep -o '<meta name="robots"[^>]*>'                                             # noindex
curl -s https://vntechies.dev/sitemap.xml | grep -c '<lastmod'                                                       # > 150 (was 0)
curl -sI "https://vntechies.dev$(curl -s https://vntechies.dev/ | grep -o '/_next/static/css/[^"]*\.css' | head -1)" | grep -i cache-control  # max-age=31536000
curl -sI https://vntechies.dev/docs/pricing | grep -iE '^(HTTP|location)'                                            # 301 → /pricing
```

Then resubmit the sitemap in GSC.

---

## Phase 1b – Structured data, courses, internal links (1 PR, ~1 day) — CODE DONE 2026-10-01 (branch `seo/phase-1b`)

> Implementation notes / deviations from the text below:
>
> - 1.4 (carried over from 1a): the homepage `<title>` is now `Khóa học AWS, DevOps, Data Engineer thực chiến | VNTechies`.
> - 1.13: lesson Articles use the raw frontmatter title as `headline` (new `headline` prop on `BlogSEO`), while `<title>` keeps the suffix / 1.17 format. The free-text `duration` → `timeRequired` was dropped (not an ISO 8601 duration).
> - 1.14: an author whose slug is `default` ("Anh Cloud") is output as the VNTechies `Organization`, not a Person with a URL to `/authors/default`. That applies to every post without `authors` until 5.1 fills them in.
> - 1.16: `FreeCourses` was restyled with the revamp tokens (`page-section`, `action-btn-secondary`). Its link goes to `/courses#mien-phi`, which opens the Free tab (1.15 optional part).
> - 1.17: also matches `Ngày N: Topic` (used in 90-ngay-devops-v2). The series name is taken from the course landing title, with the trailing emoji stripped, so v2 lessons read "… – 90 Ngày DevOps v2 (ngày N)".
> - Verified in `out/`: every local "Done when" check below passes. Production checks, Rich Results Test and GSC re-indexing still pending deploy.

- [x] 1.10 Homepage JSON-LD via `PageSEO structuredData` in `pages/index.js`:
  ```js
  const s = siteMetadata
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'VNTechies',
      url: s.siteUrl,
      logo: `${s.siteUrl}${s.siteLogo}`,
      email: s.email,
      sameAs: [s.facebook, s.youtube, s.tiktok, s.linkedin, s.github, s.twitter, s.instagram],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'VNTechies',
      alternateName: 'VNTechies Dev Blog',
      url: `${s.siteUrl}/`,
    },
  ]
  ```
- [x] 1.11 Course grouping bug in `pages/courses/[...slug].js`. The course key is `params.slug[0]`, so all `aws/*` courses form one group: the CDK course's lesson list shows the SAA/DVA/DEA/CLF landing pages, and the SAA schema lists CDK lessons. Use the folder instead:
  ```js
  const courseOf = (slug) => slug.split('/').slice(0, -1).join('/')
  const course = params.slug.slice(0, -1).join('/')
  // use courseOf(p.slug) === course in sameCoursePosts, prev and next
  ```
  Same file: add `slug: author` to each `authorDetails` entry, as `pages/blog/[...slug].js` already does.
- [x] 1.12 Course RSS. Today every course feed lists all courses with `/blog/…` links (404).
  - `lib/generate-rss.js`: add a `basePath = 'blog'` param and use it in `<guid>` and `<link>`.
  - Course pages call `` generateRss(<this course's posts, newest first>, `courses/${course}/feed.xml`, 'courses') ``.
- [x] 1.13 Course schema (`CourseSEO` in `components/SEO.js` + the course page)
  - Landing pages (`index === 0`) get one `Course`. Today they get an `ItemList` whose items all share the page URL, and the price branch never runs.
    ```js
    const priceNumber = Number(String(price || '').replace(/[^0-9]/g, '')) // "8.000.000 VNĐ" → 8000000
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name, // frontmatter title, without the " | VNTechies" suffix
      description: summary,
      url,
      inLanguage: 'vi',
      image: featuredImages[0].url,
      provider: {
        '@type': 'Organization',
        name: 'VNTechies',
        url: siteMetadata.siteUrl,
        logo: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
      },
      ...(isFree
        ? { isAccessibleForFree: true }
        : priceNumber > 0 && {
            offers: {
              '@type': 'Offer',
              price: priceNumber,
              priceCurrency: 'VND',
              category: 'Paid',
              url,
              availability: 'https://schema.org/InStock',
            },
          }),
      ...(startDate && {
        hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'Online', startDate },
      }),
    }
    ```
  - Lesson pages (`index > 0`): render `BlogSEO` (Article) with `authorDetails` instead of `CourseSEO`, then delete the `ItemList` branch.
  - `og:type` → `website`. Delete the `course:published_time` / `course:modified_time` tags (not real OG properties).
- [x] 1.14 Article authors. The 15 `PostSimple` posts (including all 9 `aws-certs` posts) currently publish author = "VNTechies".
  - `layouts/PostSimple.js`: accept `authorDetails` and pass it to `BlogSEO`.
  - `BlogSEO`: build each Person as below and add `url: siteMetadata.siteUrl` to `publisher`.
    ```js
    authorList = authorDetails.map((a) => ({
      '@type': 'Person',
      name: a.name,
      url: `${siteMetadata.siteUrl}/authors/${a.slug}`,
      sameAs: [a.linkedin, a.github, a.twitter, a.website].filter(Boolean),
    }))
    ```
- [x] 1.15 `pages/courses.js`: render both the Premium and the Free grid in the HTML and hide the inactive one with a `hidden` class, e.g. `[['premium', paidCourses], ['free', freeCourses]].map(...)`. Today the free courses only appear after a click, so the 136 free-course URLs have no crawlable entry point. Optional: open the Free tab when the hash is `#mien-phi`.
- [x] 1.16 Homepage: import and render `components/home/FreeCourses.js` (built but never used), e.g. before "Đọc trước để bắt đầu nhanh hơn". While there, fix its bottom link's accessibility: remove `role="alert"` and don't nest a `<button>` inside the `<Link>` (style the link instead).
- [x] 1.17 Lesson `<title>`: 100 lessons are titled `Ngày N - Topic`. In `pages/courses/[...slug].js`, put the topic first (H1 unchanged):
  ```js
  const m = title.match(/^Ngày (\d+)\s*-\s*(.+)$/)
  const courseTitle = m ? `${m[2].trim()} – 90 Ngày DevOps (ngày ${m[1]})` : `${title} | VNTechies`
  ```

Done when:

```sh
jsonld() { curl -s "$1" | python3 -c "import sys,re,json;[print(json.dumps(json.loads(s),ensure_ascii=False,indent=1)) for s in re.findall(r'<script type=\"application/ld\+json\">(.*?)</script>',sys.stdin.read(),re.S)]"; }
jsonld https://vntechies.dev/                                    # EducationalOrganization + WebSite
jsonld https://vntechies.dev/courses/aws/saa/gioi-thieu           # one Course, Offer 8000000 VND
jsonld https://vntechies.dev/blog/aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-ai-practitioner  # author has url
curl -s https://vntechies.dev/courses | grep -o 'href="/courses/90-ngay-devops[^"]*"' | sort -u       # not empty
curl -s https://vntechies.dev/courses/90-ngay-devops/feed.xml | grep -o '<link>[^<]*' | sed -n '2,3p' # /courses/… URLs
curl -s https://vntechies.dev/courses/aws/cdk/gioi-thieu | grep -o 'href="/courses/aws/[a-z]*/' | sort | uniq -c  # saa/dva/dea/clf only from "other courses"
```

Also run Google's Rich Results Test and validator.schema.org on the same URLs (no errors). Then GSC → URL Inspection → Request indexing for `/`, `/courses` and the 7 paid landing pages.

---

## Phase 2 – Cloudflare dashboard (~1 h, plus an optional security week)

- [ ] 2.1 Rules → Redirect Rules → template "Redirect from WWW to root" (301, keep path and query).
      Done: `curl -sI https://www.vntechies.dev/blog | grep -i '^location'` → `https://vntechies.dev/blog`.
- [ ] 2.2 If 0.5a found the `*.pages.dev` URL serving the site: add a Bulk Redirect to `https://vntechies.dev` (Cloudflare doc: "Redirecting \*.pages.dev to a custom domain").
- [ ] 2.3 Caching → Configuration → Crawler Hints: On (notifies Bing and others via IndexNow when pages change).
- [ ] 2.4 If 0.5b showed blocked or challenged `/_next/static/` requests: relax that rule (Bot Fight Mode / rate limiting) for the path.
- [ ] 2.5 Optional, caution: security headers. `headers()` in `next.config.js` is ignored with `output: 'export'`, so none of them are live.
  - HSTS: SSL/TLS → Edge Certificates → HSTS, max-age 6 months. Add `includeSubDomains`/preload only once every subdomain serves HTTPS. Hard to undo: browsers remember HSTS for the whole max-age.
  - `X-Frame-Options: DENY` and `Permissions-Policy`: add to `public/_headers` under `/*` (low risk).
  - CSP: add to `public/_headers` as `Content-Security-Policy-Report-Only` first, including `https://static.cloudflareinsights.com` and `https://*.adtrafficquality.google`.
    - For a week, browse `/`, a post, a course page and `/courses/register` with DevTools open and add whatever else is reported.
    - Then switch to the enforcing header and delete `securityHeaders` / `headers()` from `next.config.js`.

---

## Phase 3 – Performance (~half day)

- [ ] 3.1 Fonts. Tailwind already uses the self-hosted `InterVariable`; the Google-hosted Inter costs ~280 KB per first visit.
  - `pages/_document.js`: change the Google Fonts URL to `family=JetBrains+Mono&display=swap`.
  - `css/tailwind.css` / `tailwind.config.js`: make sure no font stack falls back to `'Inter'` (your in-progress design-token refactor of `css/tailwind.css` already seems to drop the old `--font-body` / `--font-display` stacks).
  - Side note: `layouts/CourseDEA.js` and `layouts/CourseCLF.js` set `'Be Vietnam Pro'`, but it is never loaded. Load it or remove it.
- [ ] 3.2 Add `scripts/compress-images.js` (commit it and reuse it for every new image). It was tested on copies: `architecting-s3.png` 8.3 MB → 444 KB (2816 → 1200 px, currently the og:image, over X's 5 MB limit), `awssysopsnotes.png` 1.4 MB → 550 KB, `devops_2022.jpeg` 846 KB → 122 KB. Visual quality was fine.

  ```js
  // Usage: node scripts/compress-images.js <maxWidth> <files...>
  // Re-encodes PNG/JPEG in place (same name and format). Skips files that shrink less than 10%.
  const fs = require('fs')
  const sharp = require('sharp')

  const [maxWidth, ...files] = process.argv.slice(2)

  ;(async () => {
    for (const file of files) {
      const input = fs.readFileSync(file)
      const { format } = await sharp(input).metadata()
      let img = sharp(input).resize({ width: Number(maxWidth), withoutEnlargement: true })
      if (format === 'png') img = img.png({ palette: true, quality: 85, compressionLevel: 9 })
      else if (format === 'jpeg') img = img.jpeg({ quality: 80, mozjpeg: true })
      else continue
      const output = await img.toBuffer()
      const write = output.length < input.length * 0.9
      if (write) fs.writeFileSync(file, output)
      console.log(
        `${write ? 'wrote' : 'kept '} ${file}: ${Math.round(
          input.length / 1024
        )} KB -> ${Math.round(output.length / 1024)} KB`
      )
    }
  })()
  ```

- [ ] 3.3 Run it. Names and formats stay the same, so no frontmatter changes are needed. Spot-check a few images before committing.
  ```sh
  find public/static/images/ogps -type f -size +300k -print0 | xargs -0 node scripts/compress-images.js 1200
  find public/static/images/assets -type f \( -name '*.png' -o -name '*.jp*g' \) -size +200k -print0 | xargs -0 node scripts/compress-images.js 1600
  ```
  - Photographic PNGs that stay above 300 KB (e.g. `thodung.png`, 519 KB): convert them to `.jpg` and update the post's `images:` frontmatter.
  - Optional, in addition: Cloudflare Polish (Pro plan) serves WebP automatically.
- [ ] 3.4 Re-measure `/` and `/blog/devops/tro-thanh-devops-engineer` against the baseline:
      `npx -y lighthouse@12.6.0 <url> --only-categories=performance,seo,best-practices --view`
      Real-user data comes from GSC Core Web Vitals (28-day lag).

---

## Phase 4 – Conversion and tracking (~1–2 days, plus lead-magnet content)

- [ ] 4.1 Email capture. Nothing works today: `NewsletterForm` posts to `/api/mailchimp`, which doesn't exist in a static export, and the form isn't rendered anywhere.

  - Fastest: point the form at Mailchimp's hosted form URL (Audience → Signup forms → Embedded forms → the form `action`); no backend needed.
  - Alternative: a Cloudflare Pages Function `functions/api/mailchimp.js` that calls the Mailchimp API with a secret env var, plus a WAF rate-limit rule.
  - Render it at the end of `PostLayout`, `PostSimple` and `CourseSimple`, and on the 90 Ngày DevOps intro pages.
  - On submit, fire GA4 `sign_up` (`method: 'newsletter'`) and mark it as a key event.
  - Lead magnets, one per intent:
    - an SAA-C03 study plan for cert posts;
    - a "Lộ trình DevOps 2026" PDF for the DevOps guide;
    - a daily reminder email sequence for 90 Ngày DevOps.

  Done: a test signup appears in the audience, and GA4 DebugView shows `sign_up`.

- [ ] 4.2 Decision, using the AdSense revenue from 0.4:
  - Remove the adblock wall: delete `components/Ads.js` and the `AdblockDetector` / `<Ads />` lines in `pages/_app.js`, then run `npm uninstall adblock-detector`.
  - Stop AdSense on conversion pages (home, `/courses/*`, `/pricing`, cert posts). Either use AdSense → Ads → By site → Page exclusions (no code), or load the AdSense script from the blog layouts with `next/script` instead of `_document.js`. The second option also removes ~250 KB of JS from those pages. Use the freed space for your own course banners.
- [ ] 4.3 GA4 loading: `components/analytics/GoogleAnalytics.js` uses `strategy="lazyOnload"`, so quick bounces from social and ads can go unrecorded.
  - Option A: switch both `<Script>` tags to `afterInteractive` (small performance cost).
  - Option B: move GA4 to Cloudflare Zaraz (no client-side JS).
- [ ] 4.4 Only if you run paid social: add Meta/TikTok pixels through Zaraz with its consent manager, update `data/docs/privacy.mdx`, and have the policy checked against Vietnam's personal-data rules.
- [ ] 4.5 UTM convention (safe only after 1.1):
  - `utm_source` = facebook | zalo | tiktok | youtube | discord | linkedin | email
  - `utm_medium` = social | group | email | video | paid
  - `utm_campaign` = `<course>-<cohort>`, e.g. `saa-2026-11`
- [ ] 4.6 Trust: show testimonials with full name, a LinkedIn/Credly link and the outcome (passed exam, new role). Show mentor certifications on course pages; mentor slugs are already in frontmatter.

---

## Phase 5 – Fix existing content (weeks 3–6)

Progress check for this phase: the content-lint command in Appendix F. Baseline output: 45 summaries < 70 chars, 14 summaries > 160, 26 titles > 60, 33 posts without internal links, 23 posts without an author.

- [ ] 5.1 Real authors: add `authors: ['<slug>']` to the 23 posts in Appendix A (12 of them are the high-value PostSimple posts). Improve the author pages:
  - a Vietnamese bio (replace the English fallback "Learn more about…" in `pages/authors/[...slug].js`);
  - certifications;
  - the `linkedin` / `github` / `twitter` / `website` fields;
  - `ProfilePage` JSON-LD via `PageSEO structuredData`.
- [ ] 5.2 Cert posts (Appendix B):
  - At the top, add a "Tóm tắt nhanh" block and a facts table: exam code, number of questions, duration, passing score, fee. Take the values from the official AWS exam page on the day you write.
  - At the end, add the course CTA.
  - Set `lastmod`.
- [ ] 5.3 Merge duplicates and retired-exam posts (Appendix C):
  - Survivor = the URL with more GSC clicks (0.1 export). On a tie, keep the slug without an exam code; it survives the next exam version.
  - Merge the content, delete the losing post, add its `_redirects` line and update internal links.
- [ ] 5.4 Refresh the flagship post `data/blog/devops/tro-thanh-devops-engineer.mdx`:
  - "…năm 2024" → 2026 content and title, plus `lastmod`.
  - Add links to `/courses/devops/gioi-thieu` and `/courses/90-ngay-devops/gioi-thieu`.
  - Keep the URL.
- [ ] 5.5 Snippets:
  - Fix Appendix D.
  - Add the missing summary in `data/courses/90-ngay-devops-v2/ngay-18-dast.mdx`.
  - Extend the lesson summaries under 70 chars (listed by Appendix F).
- [ ] 5.6 Internal links: at least 3 contextual links per post (a related post, a lesson or course, a pillar). Start with the 33 posts that have none.
- [ ] 5.7 Alt text: 917 of 967 course images and 51 of 284 blog images have none. Do the top 20 lessons by GSC clicks first, describing what each screenshot shows.
- [ ] 5.8 Tags: map the 78 tags to about 12 hubs (aws, aws-certification, devops, docker, kubernetes, terraform, ci-cd, data-engineering, ai, web, linux, career).
  - Update the frontmatter.
  - 301 the old tag URLs in `_redirects`.
  - Add a short intro per hub: a small map such as `data/tags.js`, read in `pages/tags/[tag].js`.
- [ ] 5.9 90 Ngày DevOps vs GitHub: the lesson text is identical to `MichaelCade/90DaysOfDevOps/2022/vi` (90 files).
  - For the top 20 lessons by clicks, add a "Cập nhật 2026" box, an exercise or quiz, and a video.
  - Credit the translators via `authors`.
  - Open an issue or PR upstream asking for the `2022/vi` README to link to vntechies.dev.
- [ ] 5.10 Rule from now on: any meaningful edit sets `lastmod: 'YYYY-MM-DD'` (it feeds the sitemap and `dateModified`). Write this into `CONTRIBUTING.md`.

---

## Phase 6 – New content and distribution (from week 4, ongoing)

- [ ] 6.1 Cadence: at least 2 posts a month (2025 had 1). Check each topic's demand in GSC queries or Keyword Planner first.
- [ ] 6.2 Queue, each post tied to a paid course:
  1. Kinh nghiệm thi AWS Cloud Practitioner → `/courses/aws/clf/gioi-thieu` (no post exists yet)
  2. Kinh nghiệm thi AWS Data Engineer Associate → `/courses/aws/dea/gioi-thieu` and `/courses/data-engineer-bootcamp/gioi-thieu` (no post exists yet)
  3. Kinh nghiệm thi AWS CloudOps Engineer Associate (SOA-C03, replaced SysOps on 2025-09-30) → comes out of 5.3
  4. Kinh nghiệm thi AWS Generative AI Developer – Professional (AIP-C01, GA since March 2026) → `/courses/aws/aif/gioi-thieu`
  5. Pillar posts "Lộ trình học AWS / DevOps / Data Engineer 2026" → `/aws-certification-paths`, the DevOps course, the Data Engineer bootcamp
  6. Career: "Lương DevOps / Cloud / Data Engineer Việt Nam 2026" → `/career`
- [ ] 6.3 Every new post passes Appendix E.
- [ ] 6.4 Distribution per post:
  - FB page plus 2–3 relevant groups (excerpt + link), the author's LinkedIn, Discord, Zalo OA.
  - Once Google has indexed the original (GSC URL Inspection), republish on dev.to, Hashnode or Medium with `canonical_url` pointing to vntechies.dev.
- [ ] 6.5 YouTube: a short video per cert post, embedded in the post.
- [ ] 6.6 Backlinks:
  - the upstream 90DaysOfDevOps repo (5.9) and the `vntechies/blog` README;
  - university tech clubs;
  - talks at AWS User Group Vietnam / Community Builders;
  - alumni LinkedIn posts with a course link (ask at graduation).

---

## Phase 7 – Monthly review (30 min)

- [ ] GSC Page indexing:
  - "Crawled – currently not indexed" (lessons and tags);
  - "Duplicate, Google chose different canonical" (www and UTM variants; should drop toward 0 after 1.1 and 2.1);
  - structured-data errors.
- [ ] KPIs vs the baseline: non-brand organic clicks, clicks into `/courses/*`, `generate_lead`, `sign_up`, CWV status, AdSense (if kept).
- [ ] Search results show the site name "VNTechies" (from 1.4 and 1.10).

Don't spend time on: FAQPage or Course markup for rich results (Google retired Course Info in June 2025 and FAQ rich results in 2026), `llms.txt`, AMP.

---

## Appendix A – Blog posts without `authors` (23)

`[PS]` = uses the `PostSimple` layout (also needs 1.14).

```
100-followers.mdx
1000-followers.mdx
ai/ban-can-loai-ai-chatbot-nao.mdx
apis/api-101-rest-restful-api.mdx
apis/api-201-rest-vs-soap.mdx
aws/cai-dat-va-cau-hinh-aws-cli-tren-linux.mdx
aws/dark-mode-aws-console.mdx
aws-certs/aws-certified-sysops-associate-notes.mdx                                        [PS]
aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-ai-practitioner.mdx                     [PS]
aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-developer-associate.mdx                 [PS]
aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-machine-learning-engineer-associate.mdx [PS]
aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-solutions-architect-associate-saa-c03.mdx [PS]
aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-solutions-architect-associate.mdx       [PS]
aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-solutions-architect-professional-sap-c01.mdx [PS]
aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-solutions-architect-professional.mdx    [PS]
aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-sysops-associate.mdx                    [PS]
azure-certs/az-900-microsoft-azure-fundamentals-notes.mdx                                 [PS]
chuc-mung-nam-moi-quy-mao.mdx
cloud/10-vs-code-extensions-cho-cloud-engineers.mdx
devops/docker-anti-patterns.mdx
devops/terraform/terraform-associate-notes.mdx                                            [PS]
devops/tro-thanh-devops-engineer.mdx                                                      [PS]
linux/chay-may-ao-ubuntu-tren-cac-thiet-bi-apple-silicon.mdx
```

Existing author slugs used on the blog: `mau`, `hainguyen`, `sophie`, `hungran`, `hanguyen`, `monmen`.

## Appendix B – Cert post CTAs

Example CTA: `> 🎯 Muốn luyện thi SAA-C03 có mentor và lab thực hành? Xem [Khoá học AWS Solutions Architect Associate](/courses/aws/saa/gioi-thieu).`

| Post (`data/blog/…`)                                                     | CTA →                                                                                    |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| `aws-certs/…-ai-practitioner`                                            | `/courses/aws/aif/gioi-thieu`                                                            |
| `aws-certs/…-developer-associate`                                        | `/courses/aws/dva/gioi-thieu`                                                            |
| `aws-certs/…-solutions-architect-associate`, `…-associate-saa-c03`       | `/courses/aws/saa/gioi-thieu`                                                            |
| `aws-certs/…-solutions-architect-professional`, `…-professional-sap-c01` | `/aws-certification-paths` + `/courses/aws/saa/gioi-thieu`                               |
| `aws-certs/…-machine-learning-engineer-associate`                        | `/aws-certification-paths` + `/courses/aws/aif/gioi-thieu`                               |
| `aws-certs/…-sysops-associate`, `aws-certified-sysops-associate-notes`   | `/courses/devops/gioi-thieu` + `/aws-certification-paths`                                |
| `devops/terraform/terraform-associate-notes`                             | `/courses/devops/gioi-thieu` + `/courses/90-ngay-devops/ngay-57-gioi-thieu-ve-terraform` |
| `devops/tro-thanh-devops-engineer`                                       | `/courses/devops/gioi-thieu` + `/courses/90-ngay-devops/gioi-thieu`                      |

## Appendix C – Merge candidates (5.3)

| Topic  | URLs under `/blog/aws-certs/`                                                                                      | Note                                                           |
| ------ | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| SAA    | `kinh-nghiem-thi-chung-chi-aws-certified-solutions-architect-associate` (2021), `…-associate-saa-c03` (2022)       | keep one, update it to the current exam                        |
| SAP    | `kinh-nghiem-thi-chung-chi-aws-certified-solutions-architect-professional` (2021), `…-professional-sap-c01` (2022) | both cover SAP-C01 (retired); rewrite the survivor for SAP-C02 |
| SysOps | `kinh-nghiem-thi-chung-chi-aws-certified-sysops-associate` (2021)                                                  | 301 to the new CloudOps post (6.2 #3)                          |
| SysOps | `aws-certified-sysops-associate-notes` (2021)                                                                      | keep, update to SOA-C03                                        |

`_redirects` line format: `/blog/aws-certs/<old-slug> /blog/aws-certs/<survivor-slug> 301`

## Appendix D – Blog titles and summaries to fix (5.5)

Skip posts that 5.3 merges away.

Titles over 60 chars (length, file):

```
90 aws/serverless-architecture-cho-khoa-hoc-aws.mdx
82 aws/eks-upgrade.mdx
81 aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-solutions-architect-professional.mdx
80 crawl-du-lieu-ty-gia-hoi-doai.mdx
79 aws/aws-lakehouse-architecture-guide.mdx
78 aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-solutions-architect-associate.mdx
75 aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-machine-learning-engineer-associate.mdx
74 aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-solutions-architect-professional-sap-c01.mdx
68 devops/tro-thanh-devops-engineer.mdx
67 aws/architecting-s3-efficiently.mdx
62 aws/don-gian-hoa-van-hanh-voi-aws-system-manager-session-manager.mdx
61 aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-developer-associate.mdx
61 solutions/jam-stack-101-nen-tang-cua-cong-nghe-phat-trien-web-hien-dai.mdx
```

Summaries outside 70–160 chars (length, file):

```
258 aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-solutions-architect-professional-sap-c01.mdx
190 devops/tro-thanh-devops-engineer.mdx
189 aws/serverless-architecture-cho-khoa-hoc-aws.mdx
187 aws/cai-dat-va-cau-hinh-aws-cli-tren-linux.mdx
169 aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-sysops-associate.mdx
162 aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-solutions-architect-associate.mdx
 63 aws/dark-mode-aws-console.mdx
 62 aws/api-gateway-integration-timeout.mdx
 56 aws-certs/kinh-nghiem-thi-chung-chi-aws-certified-ai-practitioner.mdx
 48 aws/tu-dong-hoa-xoa-recovery-points.mdx
 47 7-tinh-nang-cua-pwa.mdx
```

## Appendix E – New-post checklist

- [ ] Title ≤ 60 chars with the main keyword first; `summary` 70–160 chars
- [ ] `authors` is a real person; `lastmod` is set on every later update
- [ ] At least 3 internal links, including the matching course CTA
- [ ] OG image 1200×630 and ≤ 200 KB (`node scripts/compress-images.js 1200 <file>`); every image has alt text
- [ ] Cert posts: "Tóm tắt nhanh" block + facts table
- [ ] After publishing: GSC URL Inspection → Request indexing; share per 6.4

## Appendix F – Content lint (Phase 5 progress check)

Run from the repo root. When Phase 5 is done it should print only what you have decided to accept.

```sh
node - <<'EOF'
const fs = require('fs'), path = require('path'), matter = require('gray-matter')
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? walk(path.join(d, e.name)) : /\.mdx?$/.test(e.name) ? [path.join(d, e.name)] : [])
for (const f of [...walk('data/blog'), ...walk('data/courses')]) {
  const { data, content } = matter.read(f)
  if (data.draft) continue
  const isBlog = f.startsWith('data/blog')
  const s = (data.summary || '').length
  const linked = /\]\((\/|https:\/\/vntechies\.dev\/)(blog|courses|tags|series|aws-certification-paths)|href="\/(blog|courses)/.test(content)
  const issues = [
    s < 70 && 'summary<70',
    s > 160 && 'summary>160',
    (data.title || '').length > 60 && 'title>60',
    isBlog && !linked && 'no-internal-links',
    isBlog && !data.authors && 'no-author',
  ].filter(Boolean)
  if (issues.length) console.log(issues.join(','), f)
}
EOF
```
